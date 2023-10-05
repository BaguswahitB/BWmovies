import "./movie-item.js";

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.setAttribute;
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <div class="alert alert-danger " role="alert">
        <strong>${message}</strong>. Masukkan keyword lain!!!
        </div>
        `;
  }
}

customElements.define("movie-list", MovieList);
