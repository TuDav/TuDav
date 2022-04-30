import { handleSurf, appearUp, findChilren, appearUp2 } from "/js/tools.js"

const rootCss = getComputedStyle(document.querySelector(':root'))
const mainValue = rootCss.getPropertyValue('--main-color')


//Main accessory
const MAItems = Array.from(document.querySelectorAll('.main-accessory-item'))
const MALeftBtn = document.querySelector('.main-accessory-left-arrow ')
const MARightBtn = document.querySelector('.main-accessory-right-arrow ')
const iconContainers = document.querySelectorAll('.main-accessory-left')
iconContainers.forEach((iconContainer) => {
   Array.from(iconContainer.children).forEach((icon, index)=>{
      icon.style.left = `${60 * index}px`
   })
})
handleSurf(MAItems, MALeftBtn, MARightBtn, 2)
appearUp(MAItems, 90)



//Main Items

const MIsSelectors = Array.from(document.querySelectorAll('.MIs-tab'))
let bottom = 90;
let x = 0;
MIsSelectors[0].style.color = mainValue
MIsSelectors.forEach(function (MIsSelector) {
   MIsSelector.onclick = function (e) {
      e.preventDefault()
      MIsSelectors.forEach(function (MIsSelector) {
         MIsSelector.style.color = '#000';
      })
      MIsSelector.style.color = mainValue;
      Array.from(document.querySelectorAll('.MIs-products')).forEach(function (item) {
         item.classList.remove('active-flex')
      })

      switch (MIsSelector.innerText) {
         case 'Combo':
            let comboDad = document.querySelector('.MIs-combo')
            comboDad.classList.add('active-flex')
            break
         case 'Quần':
            let trousersDad = document.querySelector('.MIs-trousers')
            trousersDad.classList.add('active-flex')
            break
         case 'Áo':
            let shirtDad = document.querySelector('.MIs-shirt')
            shirtDad.classList.add('active-flex')
            break
      }
      const trouserItems = Array.from(document.querySelectorAll("div.MIs-trousers > div.MIs-product"))
      const trouserLeftBtn = document.querySelector('.trousers-left-btn')
      const trouserRightBtn = document.querySelector('.trousers-right-btn')
      handleSurf(trouserItems, trouserLeftBtn, trouserRightBtn, 4)

      const shirtItems = Array.from(document.querySelectorAll("div.MIs-shirt > div.MIs-product"))
      const shirtLeftBtn = document.querySelector('.shirt-left-btn')
      const shirtRightBtn = document.querySelector('.shirt-right-btn')
      handleSurf(shirtItems, shirtLeftBtn, shirtRightBtn, 4)
   }

   const MIsProductBtns = Array.from(document.getElementsByClassName('MIs-product-btn'))
   const MIPitems = Array.from(document.getElementsByClassName('MIs-product'))
   let imgWidth = findChilren(document.querySelector('.MIs-combo'), 'MIs-product-img')[0].getBoundingClientRect().width;


   appearUp2(MIsProductBtns, MIPitems, imgWidth, 90, 'main-accessory-products-btn-item')








})



// News 
const newsContainer = document.querySelector('.news-container')
const newsItems = Array.from(document.querySelectorAll('.news-item'))
let point;
let width2;

newsContainer.ondragstart = function (e) {
   width2 = parseInt(window.getComputedStyle(newsContainer).transform.slice(19, 24))
   point = e.clientX
   newsContainer.classList.remove('linear')
}
newsContainer.ondragover = function (e) {
   newsContainer.style.transform = `translateX(${width2 + e.clientX - point}px)`
}
newsContainer.ondragend = function (e) {
   if (parseInt(window.getComputedStyle(newsContainer).transform.slice(19, 24)) > 0) {
      newsContainer.setAttribute('style', 'transform: translateX(0);')
      newsContainer.classList.add('linear')
   }
   if (parseInt(window.getComputedStyle(newsContainer).transform.slice(19, 24)) < (- parseInt(window.getComputedStyle(newsItems[0]).width.slice(0, -2)) * (newsItems.length - 4))) {
      newsContainer.setAttribute('style', `transform: translateX(-${parseInt(window.getComputedStyle(newsItems[0]).width.slice(0, -2)) * (newsItems.length - 4)}px); `)
      newsContainer.classList.add('linear')
   }
}


//Reitems 
const footShirtItem = Array.from(document.querySelectorAll('.foot-shirt-item'))
const footShortItem = Array.from(document.querySelectorAll('.foot-short-item'))
const footComboItem = Array.from(document.querySelectorAll('.foot-combo-item'))
document.querySelector('.foot-shirt-container').setAttribute('style', `width: ${footShirtItem.length * 100}%`)
document.querySelector('.foot-short-container').setAttribute('style', `width: ${footShortItem.length * 100}%`)
document.querySelector('.foot-combo-container').setAttribute('style', `width: ${footComboItem.length * 100}%`)
const foorShirtLeft = document.querySelector('.foot-shirt-left-btn')
const foorShirtRight = document.querySelector('.foot-shirt-right-btn')
const foorShortLeft = document.querySelector('.foot-short-left-btn')
const foorShortRight = document.querySelector('.foot-short-right-btn')
const foorComboLeft = document.querySelector('.foot-combo-left-btn')
const foorComboRight = document.querySelector('.foot-combo-right-btn')
handleSurf(footShirtItem, foorShirtLeft, foorShirtRight, 1)
handleSurf(footShortItem, foorShortLeft, foorShortRight, 1)
handleSurf(footComboItem, foorComboLeft, foorComboRight, 1)

