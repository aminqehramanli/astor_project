import { devices3, singleProducts, topSelling, devices4ss } from "./js/config.js";

singleProducts()
topSelling()
devices3()
devices4ss()

let categories_btn = document.querySelector('.categories_menu_title');


function categoriesToggle(){
    let count = 0;
    categories_btn.addEventListener('click', ()=>{
        console.log(categories_btn.parentElement.childNodes[3].childNodes[1]);
       if(count == 0){
           categories_btn.parentElement.childNodes[3].style.maxHeight = '490px'
           count++
        }
        else{
            categories_btn.parentElement.childNodes[3].style.maxHeight = null
            categories_btn.parentElement.childNodes[3].style.overflow  = "hidden"   
           count = 0 
       }
   })
}

categoriesToggle()
