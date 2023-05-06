import WishListCard from "./WishListCard.js";
import { sebetCount, wishListContainer } from "./query.js"

let sebet = []
if (localStorage.getItem('astorSebet')) {
    sebet = JSON.parse(localStorage.getItem('astorSebet'))
}

function showCount() {
    sebetCount.innerHTML = sebet.length
}

showCount();


export const addToCard = (data) => {
    const addToCartBtn = document.querySelectorAll('.addToCartBtn')
    console.log(addToCartBtn)
    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].addEventListener('click', (e) => {
            e.preventDefault();

            const check = sebet.find(item => item.id == e.target.id);
            if (check) {
                check.count += 1;
            } else {
                const newItem = data.find(item => item.id == e.target.id);
                newItem.count = 1;
                sebet.push(newItem);
            }
            localStorage.setItem('astorSebet', JSON.stringify(sebet));
            showCount();
        })
    }
}



export function showCarts() {
    wishListContainer.innerHTML = '';
    sebet.forEach((data) => {
        wishListContainer.innerHTML += WishListCard.render(data)
    });

    const btns = document.querySelectorAll('wishlist_delete');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', (e) => {
            const findData = sebet.findIndex(data => data.id == e.target.id);
            if (findData != -1) {
                sebet.splice(findData, 1)

                localStorage.setItem('astorSebet', JSON.stringify(sebet));
                showCount();
                showCarts();

            }
        })
    }

}


