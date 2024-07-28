window.onload = () => {
  const app = document.getElementById("root");
  const container = document.querySelector(".container");
  const favoritesButton = document.getElementById("favoritesButton");

  // Mostrar el botón de favoritos si hay películas en el storage
  if (localStorage.getItem('favoriteMovies')) {
      favoritesButton.style.display = 'block';
  }

  favoritesButton.addEventListener('click', () => {
      window.location.href = 'favoritas';
  });

  fetch('http://localhost:3001/api/movies')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
  })
  .then(peliculas => {
      let data = peliculas.data;
      console.log(data); // Agregar un log para verificar los datos recibidos

      data.forEach((movie) => {
          const card = document.createElement("div");
          card.setAttribute("class", "card");

          const h1 = document.createElement("h1");
          h1.textContent = movie.title;

          const p = document.createElement("p");
          p.textContent = `Rating: ${movie.rating}`;

          const duracion = document.createElement("p");
          duracion.textContent = `Duración: ${movie.length}`;

          const star = document.createElement("span");
          star.textContent = '⭐';
          star.style.cursor = 'pointer';
          star.addEventListener('click', () => {
              addFavoriteMovie(movie.id);
          });

          card.appendChild(h1);
          card.appendChild(p);

          if (movie.genre !== null) {
              const genero = document.createElement("p");
              genero.textContent = `Género: ${movie.genre.name}`;
              card.appendChild(genero);
          }

          card.appendChild(duracion);
          card.appendChild(star);
          container.appendChild(card);
      });
  })
  .catch(error => console.error('Error:', error));

  function addFavoriteMovie(movieId) {
      let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
      if (!favoriteMovies.includes(movieId)) {
          favoriteMovies.push(movieId);
          localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
          favoritesButton.style.display = 'block';
      }
  }
};

