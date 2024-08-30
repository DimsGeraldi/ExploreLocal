class Destination5Card extends HTMLElement {
    connectedCallback() {
      const searchBar = this.getAttribute("searchBar") || "";
      this.render(searchBar);
    }
  
    render(searchBar) {
      this.innerHTML = `
        <div class="destination1-layout">
            <img src="../Material/HomePage/Destination5.jpeg" class="destination-image" />
            <div class="destination-card">
                <div class="destination-header">
                    <div class="destination-travel">
                        <p class="travel-text">BEACHOME</p>
                    </div>
                </div>
                <div class="destination-title-container">
                    <p class="destination-title"><a href="WhiteBeach.html">Crystal Waters: White Beach Getaway</a></p>
                </div>
                <div class="destination-description">
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Location.svg" class="description-icon" />
                        <p class="description-text">Pulau Karimun, Jawa Tengah</p>
                    </div>
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Time.svg" class="description-icon" />
                        <p class="description-text">1 Day</p>
                    </div>
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Ordered.svg" class="description-icon" />
                        <p class="description-text">34x Ordered</p>
                    </div>
                </div>
                <div class="destination-footer">
                    <div class="trip-type-container">
                        <div class="trip-type-a">
                            <p class="trip-type-text">Open Trip</p>
                        </div>
                    </div>
                    <div class="price-container">
                        <p class="price-text">Rp250.000/Pax</p>
                    </div>
                </div>
            </div>
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
  
  customElements.define("destination5-card-component", Destination5Card);