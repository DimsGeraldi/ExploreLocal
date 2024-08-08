class Footer extends HTMLElement {
    connectedCallback() {
      const searchBar = this.getAttribute("searchBar") || "";
      this.render(searchBar);
    }
  
    render(searchBar) {
      this.innerHTML = `
            <footer>
                <p class="web-rights">&copy; 2024 EXPLORELOCAL<br>ALL RIGHTS RESERVED</p>
            </footer>
          `;
    }
  
    isSearchBarOn(searchBar) {
      if (searchBar === "on") return "";
      else {
        return "display:none;";
      }
    }
  }
  
  customElements.define("footer-component", Footer);