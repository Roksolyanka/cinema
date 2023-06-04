window.addEventListener('DOMContentLoaded', function () {
  fetchMovies();
});

function fetchMovies() {
  const apiKey = '839ee1ac45e2249141bd738796b376ad'; // Вставте свій API ключ
  const trendingUrl =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=' + apiKey;

  fetch(trendingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const movies = data.results; 
      const moviesContainer = document.getElementById(
        'weekly-trends-movies-container'
      );

      movies.forEach(function (movie) {
        const movieId = movie.id;
        const movieUrl =
          'https://api.themoviedb.org/3/movie/' +
          movieId +
          '?api_key=' +
          apiKey;

        fetch(movieUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (movieData) {
            const movieCard = createMovieCard(movie, movieData);
            moviesContainer.appendChild(movieCard);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function createMovieCard(movie, movieData) {
  const movieCard = document.createElement('div');
  movieCard.className = 'weekly-trends-movie-card';

  if (movie.poster_path) {
    const posterUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    const poster = document.createElement('img');
    poster.src = posterUrl;
    poster.alt = movie.title + ' Poster';
    movieCard.appendChild(poster);

    const movieInfo = document.createElement('div');
    movieInfo.className = 'weekly-trends-movie-info';

    const titleGenresWrapper = document.createElement('div'); // Окремий div для заголовку та жанрів
    titleGenresWrapper.className = 'title-genres-wrapper';

    const title = document.createElement('h2');
    title.classList.add('weekly-trends-movie-title');
    title.textContent = movie.title;
    titleGenresWrapper.appendChild(title);

    const genres = document.createElement('p');
    genres.classList.add('weekly-trends-movie-genres');
    genres.textContent = getGenres(movieData.genres, movieData.release_date);
    titleGenresWrapper.appendChild(genres);

    movieInfo.appendChild(titleGenresWrapper);

    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating-container';
    movieInfo.appendChild(ratingContainer);

    const ratingElement = document.createElement('div');
    ratingElement.className = 'movie-rating';
    ratingContainer.appendChild(ratingElement);

    // const rating = document.createElement('p');
    // rating.textContent = movieData.vote_average;
    // movieInfo.appendChild(rating);

    // Ініціалізувати зірковий рейтинг RateYo
    $(ratingElement).rateYo({
      rating: movieData.vote_average / 2, // Поділити рейтинг на 2, оскільки RateYo використовує шкалу від 0 до 5
      readOnly: true, // не можна змінювати рейтинг
      starWidth: '18px', // Розмір зірок
      precision: 2, // Заокруглення до двох десятих
    });

    movieCard.appendChild(movieInfo);

    movieCard.addEventListener('click', function () {
      openModal(movie, movieData);
    });
  }

  return movieCard;
}

function getGenres(genresArray, releaseDate) {
  const year = releaseDate ? releaseDate.slice(0, 4) : ''; // Отримуємо рік з дати

  if (genresArray.length > 2) {
    return genresArray[0].name + ', others | ' + year;
  } else {
    return (
      genresArray
        .map(function (genre) {
          return genre.name;
        })
        .join(', ') +
      ' | ' +
      year
    );
  }
}

function openModal(movie, movieData) {
  // Виконати дії для відкриття модального вікна з детальною інформацією про фільм
  // Ви можете викликати власну функцію або використовувати бібліотеки/інструменти для створення модального вікна.
  // У цьому коді я просто виведу інформацію про фільм у консоль для прикладу:
  console.log('Open Modal');
  console.log('Movie Title:', movie.title);
  console.log(
    'Movie Genres:',
    getGenres(movieData.genres, movieData.release_date)
  );
  console.log('Movie Rating:', movieData.vote_average);
}
