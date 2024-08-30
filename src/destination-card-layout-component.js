class DestinationCardLayout extends HTMLElement {
    connectedCallback() {
      const searchBar = this.getAttribute("searchBar") || "";
      this.render(searchBar);
    }
  
    render(searchBar) {
      this.innerHTML = `
        <div class="destination-card-section1 section-x">
            <destination1-card-component></destination1-card-component>
            <destination2-card-component></destination2-card-component>
            <destination3-card-component></destination3-card-component>
            <destination4-card-component></destination4-card-component>
            <destination5-card-component></destination5-card-component>
        </div>
          `;
    }

    isSearchBarOn(searchBar) {
      if (searchBar === "on") return "";
      else {
        return "display:none;";
      }
    }
  }
  
  customElements.define("destination-card-layout-component", DestinationCardLayout);