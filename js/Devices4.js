class Devices4 {
  render(product) {
    return (
      `
            <div class="products_card">
                <div class="products_card_image">
                  <a href="#">
                    <img
                      src="${product.image}"
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
                        <li>
                          <div class="color">
                            <a href="#"
                              ><img
                                src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/11_466b7e59-bd93-4b4d-bfbb-cef9994ea83a_icon_crop_center.jpg?v=1643606162"
                                alt=""
                            /></a>
                          </div>
                        </li>
                        <li>
                          <div class="color">
                            <a href="#"
                              ><img
                                src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/12_6d5acf4b-1896-495e-8f2d-396a58f95ff6_icon_crop_center.jpg?v=1643606162"
                                alt=""
                            /></a>
                          </div>
                        </li>
                        <li>
                          <div class="color">
                            <a href="#"
                              ><img
                                src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/11_466b7e59-bd93-4b4d-bfbb-cef9994ea83a_icon_crop_center.jpg?v=1643606162"
                                alt=""
                            /></a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="products_card_title">
                  <div class="title">
                    <h4>${product.name}</h4>
                    <div class="title_select">
                      <a href="#">
                        <span>+</span>
                        <span>Select Options</span>
                      </a>
                    </div>
                  </div>
                  <div class="price">
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            `
    )
  }
}

export default new Devices4;