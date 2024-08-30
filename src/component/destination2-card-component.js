class Destination2Card extends HTMLElement {
    connectedCallback() {
      const searchBar = this.getAttribute("searchBar") || "";
      this.render(searchBar);
    }
  
    render(searchBar) {
      this.innerHTML = `
        <div class="destination1-layout">
            <img src="../Material/HomePage/Destination2.jpg" class="destination-image" />
            <div class="destination-card">
                <div class="destination-header">
                    <div class="destination-travel">
                        <p class="travel-text">MOUNTAINADVENTURES</p>
                    </div>
                </div>
                <div class="destination-title-container">
                    <p class="destination-title"><a href="BromoTenggerSemeru.html">Volcanic Wonders: Bromo Tengger Semeru Tour</a></p>
                </div>
                <div class="destination-description">
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Location.svg" class="description-icon" />
                        <p class="description-text">Taman Nasional Bromo, Jawa Timur</p>
                    </div>
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Time.svg" class="description-icon" />
                        <p class="description-text">1 Day</p>
                    </div>
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Ordered.svg" class="description-icon" />
                        <p class="description-text">51x Ordered</p>
                    </div>
                </div>
                <div class="destination-footer">
                    <div class="trip-type-container">
                        <div class="trip-type-b">
                            <p class="trip-type-text">Private Trip</p>
                        </div>
                    </div>
                    <div class="price-container">
                        <p class="price-text">Rp300.000/Pax</p>
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
  
  customElements.define("destination2-card-component", Destination2Card);
