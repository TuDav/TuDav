import { handleSurf, appearUp, appearUp2, findChilren } from "/js/tools.js"

const productFolders = document.querySelectorAll('.product-folder')
const MIsProduct = Array.from(document.querySelectorAll('.MIs-product'))
const MIsBtnContainer = Array.from(document.querySelectorAll('.main-accessory-products-btn'))
const productItemContainers = Array.from(document.querySelectorAll('.product-items-container'))
const productItemImgs = Array.from(document.querySelectorAll('.product-item-img'))
productFolders.forEach((productFolder) => {
    productFolder.onclick = function (e) {
        e.preventDefault()
        productFolder.parentElement.children[1].classList.toggle('active')
    }
})

let imgWidth = parseInt(window.getComputedStyle(document.querySelectorAll('.product-item-img')[0], "").width.slice(0, -2))
appearUp2(MIsBtnContainer, MIsProduct, imgWidth, 90, 'main-accessory-products-btn-item')
productItemContainers.forEach((productItemContainer) => {
    if (productItemContainer.className.includes('row') === false) {
        findChilren(productItemContainer, 'product-item-img').forEach((productItemImg) => {
            productItemImg.setAttribute('style', 'width: 322px; height: 407px')
        })
    }
})

const pages = Array.from(document.querySelectorAll('.product-pagination'))
pages.forEach((page, index) => {
    if (page.getAttribute('href').slice(0, -4) === '?_sort&name=&type=') {
        page.setAttribute('href', `?q=${index + 1}`)
    }
})

const productListBtn = document.querySelector('.product-display-list-icon')
const productGridBtn = document.querySelector('.product-display-gird-icon')
const productListContainer = document.querySelector('.product-list-container')
const productGridContainer = document.querySelector('.product-grid-container')
const btnContainers = document.querySelectorAll('.main-accessory-products-btn')
var queryString = window.location.search.substring(1)
const sortItems = document.querySelectorAll('.child-container > a')
const folderItems = document.querySelectorAll('.product-item')

const oldSortString = queryString.slice(queryString.indexOf('_sort'), queryString.indexOf('&e') + 2)
const oldPageString = queryString.slice(queryString.indexOf('q='), queryString.indexOf('q=') + 3)
const oldFolderString = queryString.slice(queryString.indexOf('category'), queryString.indexOf('&f') + 2)
const oldIdString = queryString.slice(queryString.indexOf('id='), queryString.indexOf('&ei')+3)
// Display
productListBtn.setAttribute('href', '?' + queryString.replace('grid', 'list'))
productGridBtn.setAttribute('href', '?' + queryString.replace('list', 'grid'))

//Sort
sortItems.forEach((sortItem) => {
    if (queryString.includes('_sort')) {
        sortItem.setAttribute('href', `?${queryString.replace(oldSortString, sortItem.getAttribute('href'))}`)
    } else {
        sortItem.setAttribute('href', `?${queryString}&${sortItem.getAttribute('href')}`)
    }
})

folderItems.forEach(function (folderItem) {
    if (queryString.includes('category=')) {
        folderItem.setAttribute('href', `?${queryString.replace(oldFolderString, folderItem.getAttribute('href'))}`)
    }
    else {
        folderItem.setAttribute('href', `?${queryString}&${folderItem.getAttribute('href')}`)
    }
})

// Render List or Grid
const handleDisplay = (activeDisplay, disableDisplay, disableBtn) => {
    activeDisplay.classList.add('container-btn-active')
    disableDisplay.classList.remove('container-btn-active')
    disableBtn.removeAttribute('style')
    imgWidth = parseInt(window.getComputedStyle(document.querySelectorAll('.product-item-img')[0]).width.slice(0, -2))
}
if (queryString.includes('list')) {
    handleDisplay(productListBtn, productGridBtn, productGridContainer)
    productListContainer.setAttribute('style', 'display: block')
    btnContainers.forEach((btnContainer) => {
        btnContainer.setAttribute('style', 'width: 306px; left: 0')
    })
}
else {
    handleDisplay(productGridBtn, productListBtn, productListContainer)
    productGridContainer.setAttribute('style', 'display: flex')
    appearUp2(MIsBtnContainer, MIsProduct, imgWidth, 90, 'main-accessory-products-btn-item')
}






// Pagination
const paginationContainer = document.querySelector('.pagination-container')
const allItemsCount = parseInt(paginationContainer.getAttribute('data-page'))
const perPageItems = parseInt(paginationContainer.getAttribute('data-perPage'))
const pageCount = Math.ceil(allItemsCount / perPageItems)
for (var i = 0; i < pageCount; i++) {
    const pageDisplay = document.createElement("a")
    pageDisplay.setAttribute('href', `q=${i + 1}`)
    pageDisplay.setAttribute('class', 'product-pagination')
    pageDisplay.innerText = i + 1
    paginationContainer.appendChild(pageDisplay)
}
const activeBtn = paginationContainer.attributes[1].nodeValue
const paginationBtns = Array.from(document.querySelectorAll('.product-pagination'))
paginationBtns.forEach((paginationBtn) => {
    if (paginationBtn.innerText === activeBtn) {
        paginationBtn.setAttribute('style', 'background-color: #B18763')
    }
})

const pageItems = document.querySelectorAll('.product-pagination')
pageItems.forEach((pageItem) => {
    if (queryString.includes('q=')) {
        pageItem.setAttribute('href', `?${queryString.replace(oldPageString, pageItem.getAttribute('href'))}`)
    }
    else {
        pageItem.setAttribute('href', `?${queryString}&${pageItem.getAttribute('href')}`)
    }
})