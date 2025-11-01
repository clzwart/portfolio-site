class StoryboardViewer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const storyboardViewerContainer = document.createElement("div");

    const title = this.title;
    const src = this.src;
    const show = this.show;

    storyboardViewerContainer.innerHTML = `
        <style>
            .storyboard-viewer-container {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 32px;
            }

            iframe {
                border: 0px;
                background: padding-box padding-box rgba(0, 0, 0, 0.1);
                margin-top: 32px;
                padding: 0px;
                border-radius: 6px;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;
                width: 75vw;
                max-width: 1032px;
                height: auto;
                aspect-ratio: 560 / 432;
            }

            h3 {
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                margin-top: 72px;
            }
        </style>
        <div class="storyboard-viewer-container">
            <h3>${title}</h3>
            <iframe 
                class="${show ? "" : "hidden"}"
                src="${src}"
                allowfullscreen="true"
            ></iframe>
        </div>
        `;

    shadow.appendChild(storyboardViewerContainer);
  }

  get title() {
    return this.getAttribute("title") || "";
  }

  get src() {
    return this.getAttribute("src") || "";
  }

  get show() {
    return this.getAttribute("show") || "";
  }
}

customElements.define("storyboard-viewer", StoryboardViewer);
