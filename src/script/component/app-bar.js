class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
        <div class="icon mx-auto">
          <img src= "https://cdn.iconscout.com/icon/premium/png-64-thumb/live-streaming-3335861-2784681.png" width="120" height="100" alt="">
          <a class="title d-block text-decoration-none text-primary" font-size: 35px;"> BWmovies </a>
        </div>   
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
