window.onload = () => {
  const container = document.querySelector(".container");

  let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

  if (favoriteMovies.length === 0) {
      const noFavorites = document.createElement("p");
      noFavorites.textContent = "Aún no tienes películas favoritas.";
      container.appendChild(noFavorites);
  } else {
      favoriteMovies.forEach(movieId => {
          fetch(`http://localhost:3001/api/movies/${movieId}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok ' + response.statusText);
              }
              return response.json();
          })
          .then(movieData => {
              const movie = movieData.data;
              const card = document.createElement("div");
              card.setAttribute("class", "card");

              const h1 = document.createElement("h1");
              h1.textContent = movie.title;

              const p = document.createElement("p");
              p.textContent = `Rating: ${movie.rating}`;

              const duracion = document.createElement("p");
              duracion.textContent = `Duración: ${movie.length}`;

              card.appendChild(h1);
              card.appendChild(p);

              if (movie.genre !== null) {
                  const genero = document.createElement("p");
                  genero.textContent = `Género: ${movie.genre.name}`;
                  card.appendChild(genero);
              }

              card.appendChild(duracion);
              container.appendChild(card);
          })
          .catch(error => console.error('Error:', error));
      });
  }
};

