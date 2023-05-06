class Devices3 {
    render(product){
        return(
            `
            <div class="card_single">
            <a href="#">
              <img
                src="${product.image}"
                alt=""
              />
            </a>
            <div class="card_single_text">
              <div class="text">
                <p>${product.name}</p>
                <span>${product.price}</span>
              </div>
            </div>
          </div>
            `
        )
    }
}

export default new Devices3;