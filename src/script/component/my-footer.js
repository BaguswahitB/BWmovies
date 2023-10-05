class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div >
    © 2022 Copyright by <a class="text-dark"> <b>Bagus Wahit Bayunara</b></a>
    </div>
      `;
  }
}

customElements.define("my-footer", Footer);
