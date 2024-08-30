class Destination3Card extends HTMLElement {
    connectedCallback() {
      const searchBar = this.getAttribute("searchBar") || "";
      this.render(searchBar);
    }
  
    render(searchBar) {
      this.innerHTML = `
        <div class="destination1-layout">
            <img src="../Material/HomePage/Destination3.jpeg" class="destination-image" />
            <div class="destination-card">
                <div class="destination-header">
                    <div class="destination-travel">
                        <p class="travel-text">SERENETRAVEL.CO</p>
                    </div>
                </div>
                <div class="destination-title-container">
                    <p class="destination-title"><a href="TanjungPuting.html">Orangutan Odyssey: Tanjung Puting Tour</a></p>
                </div>
                <div class="destination-description">
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Location.svg" class="description-icon" />
                        <p class="description-text">Tanjung Puting, Kalimantan Tengah</p>
                    </div>
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Time.svg" class="description-icon" />
                        <p class="description-text">2 Days | 1 Night</p>
                    </div>
                    <div class="destination-row-container">
                        <img src="../Material/HomePage/Ordered.svg" class="description-icon" />
                        <p class="description-text">47x Ordered</p>
                    </div>
                </div>
                <div class="destination-footer">
                    <div class="trip-type-container">
                        <div class="trip-type-a">
                            <p class="trip-type-text">Open Trip</p>
                        </div>
                    </div>
                    <div class="price-container">
                        <p class="price-text">Rp450.000/Pax</p>
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
  
  customElements.define("destination3-card-component", Destination3Card);
