import MiniCard from "./MiniCard.js"
import { bestSeller, featuredProducts, newArrivals } from "./query.js"

export const  singleProducts = ()=>{
    fetch('../db/singleProducts.json')
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)
        data.forEach((product)=>{
            if(product.type == 'new_arrivals'){
                newArrivals.innerHTML+= MiniCard.render(product)
            }else if(product.type == "featured_products"){
                featuredProducts.innerHTML+= MiniCard.render(product) 
            }else{
                bestSeller.innerHTML+= MiniCard.render(product)
            }
        })
    })
}

