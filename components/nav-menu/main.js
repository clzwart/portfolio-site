class NavMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const navMenuContainer = document.createElement("nav");

    navMenuContainer.innerHTML = `
    <style>

    </style>
    <nav class="top-nav">
      <button class="menu-button">Menu <span class="drop-down-arrow">&#9662</span></button>
      <div class="menu-content">
        <a href="">Home</a>
        <a href="">Storyboards</a>
        <a href="">Comics & Sketches</a>
        <a href="">Contact Me</a>
      </div>
    </nav>
    `;

    shadow.appendChild(navMenuContainer);
  }
}

customElements.define("nav-menu", NavMenu);
