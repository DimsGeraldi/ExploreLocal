class Header extends HTMLElement {
  connectedCallback() {
    const searchBar = this.getAttribute("searchBar") || "";
    this.render(searchBar);
  }

  render(searchBar) {
    this.innerHTML = `
            <header>
        <div class="logo">
            <img src="../Material/HomePage/ExploreLocalLogo.png" alt="ExploreLocal Logo">
            <p class="logo-text">ExploreLocal</p>
        </div>
        <div class="user-menu">
            <div class="search-box-container" style='${this.isSearchBarOn(
              searchBar
            )}'>
                <input type="text" placeholder="Search destination" />
                <img src="../Material/HomePage/Search.svg" class="icon" />
                <img src="../Material/HomePage/Filter.svg" class="icon" />
            </div>
            <a href="#"><img src="../Material/HomePage/Cart.svg" alt="Cart"></a>
            <a href="#"><img src="../Material/HomePage/Settings.svg" alt="Settings"></a>
        </div>
    </header>
        `;
  }

  isSearchBarOn(searchBar) {
    if (searchBar === "on") return "";
    else {
      return "display:none;";
    }
  }
}

customElements.define("header-component", Header);
