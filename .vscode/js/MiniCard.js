class MiniCard{

    getRating(count){
        let stars = '';
        for(let i=1; i<=5; i++){
            if(i<=count){
                stars+=`<i class="fa-solid fa-star"></i>`
            }else{
                stars+=`<i class="fa-regular fa-star"></i>`
            }
        }
        return stars
    }
    render(product){
       return(
        `
        <div class="products_single_cart">
        <div class="cart_image">
          <a href="#">
            <img
              src="${product.image}"
              alt=""
            />
          </a>
        </div>
        <div class="cart_content">
          <h4><a href="#">${product.name}</a></h4>
          <p class="price">${product.price}</p>
          <p class="rating">
            ${this.getRating(product.rating)}
          </p>
        </div>
      </div>
      `
       )
    }
}

export default new MiniCard;