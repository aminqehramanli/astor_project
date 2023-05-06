class WishListCard {

  getMiniImages(images) {
    let img = ''
    for (let i = 0; i < images.length; i++) {
      img += `
                                <li>
                                  <div class="color">
                                    <a href="#"
                                      ><img
                                        src="https://cdn.shopify.com/s/files/1/0023/4104/4283/products/11_466b7e59-bd93-4b4d-bfbb-cef9994ea83a_icon_crop_center.jpg?v=1643606162"
                                        alt=""
                                    /></a>
                                  </div>
                                </li>
                                `

    }
    return img;
  }

  render(data) {
    return (
      `
            <div class="wishlist_card">
                        <div class="wishlist_card_image">
                          <a href="#">
                            <img
                              src="${data.image}"
                              alt=""
                            />
                          </a>
                          <div class="wishlist_card_floating_icons">
                            <span id="${data.id}" class="wishlist_delete" class="wishlist_icon">
                                <i id="${data.id}" class="ion-close-round"></i>
                            </span>
                            <span class="compare_icon">
                              <i class="ion-ios-shuffle-strong"></i>
                            </span>
                          </div>
                          <div class="wishlist_card_color_variant">
                            <div class="grid_color_variant">
                              <ul>
                                ${this.getMiniImages(data.color)}                               
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="wishlist_card_title">
                          <div class="title">
                            <h4>${data.name}</h4>
                            <div class="title_select">
                              <a href="#">
                                <span>+</span>
                                <span> Buy from amazon</span>
                              </a>
                            </div>
                          </div>
                          <div class="price">
                            <p>${data.price}</p>
                          </div>
                        </div>
                      </div>
                      `
    )
  }
}

export default new WishListCard;