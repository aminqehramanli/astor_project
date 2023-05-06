import Devices3 from "./Devices3.js"
import MiniCard from "./MiniCard.js"
import TopSellingCard from "./TopSellingCard.js"
import { bestSeller, bestSellingContainer, devices3container, featuredProducts, newArrivals, Devices4a } from "./query.js"
import Devices4 from "./Devices4.js" 
import { addToCard } from "./addToCard.js"

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

export const topSelling = () => {
    fetch('../db/topSellingProducts.json')
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)
        data.forEach(card=>{
            bestSellingContainer.innerHTML += TopSellingCard.render(card)
        })
        addToCard(data)

    })
}

export const devices3 = () => {
    fetch('../db/sectionFourthSingle.json')
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)
        data.forEach(card=>{
            devices3container.innerHTML += Devices3.render(card)
        })
    })
}

export const devices4ss = () => {
    fetch('../db/allProducts.json')
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data)

        data.forEach(card=>{
            Devices4a.innerHTML +=TopSellingCard.render(card)
        })
        addToCard(data)

    })
}


