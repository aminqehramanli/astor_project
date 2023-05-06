class TopSellingCard{

    getMiniImages(images){
        let img = '';
        images.forEach((item)=>{
            img += 
                   `
                        <li>
                          <div class="color">
                            <a href="#"
                              ><img
                                src="${item}"
                                alt=""
                            /></a>
                          </div>
                        </li>
                   `
        })
        return img;
    }
    render(data){
        return(
            `
            
              <div class="products_card">
                <div class="products_card_image">
                  <a href="#">
                    <img
                      src="${data.image}"
                      alt=""
                    />
                  </a>
                  <div class="products_card_floating_icons">
                    <span class="wishlist_icon">
                      <i class="ion-android-favorite-outline"></i>
                    </span>
                    <span class="compare_icon">
                      <i class="ion-ios-shuffle-strong"></i>
                    </span>
                    <span class="view_icon">
                      <i class="ion-ios-search-strong"></i>
                    </span>
                  </div>
                  <div class="products_card_color_variant">
                    <div class="grid_color_variant">
                      <ul>
                        ${this.getMiniImages(data.color)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="products_card_title">
                  <div class="title">
                    <h4>${data.name}</h4>
                    <div class="title_select">
                      <a href="#">
                        <span>+</span>
                        <span class="addToCartBtn" id="${data.id}">Select Options</span>
                      </a>
                    </div>
                  </div>
                  <div class="price">
                    <p>${data.price}</p>
                  </div>
                </div>
              
            `
          )
    }
}

export default new TopSellingCard;

