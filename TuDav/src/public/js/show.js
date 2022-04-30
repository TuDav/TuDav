

const plusBtn = document.querySelector('.btn-plus')
const decreaseBtn = document.querySelector('.btn-decrease')
const itemCounter = document.querySelector('.item-counter')
var i = 1;
itemCounter.innerText = i
plusBtn.onclick = (e) => {
    e.preventDefault()
    i++
    itemCounter.innerText = i
}
decreaseBtn.onclick = (e) => {
    e.preventDefault()
    if (i > 1) {
        i--
    } else {
        i = 1
    }
    itemCounter.innerText = i
}
var thisId = window.location.href.substring(28)

const itemIds = Array.from(document.querySelectorAll('.same-item-container'))
itemIds.forEach((itemId) => {
    if (thisId === itemId.getAttribute('href')) {
        itemId.setAttribute('style', 'display: none')
    }
})
const continueBuy = document.querySelector('.continue-buy')
const boughtCover = document.querySelector('.bought-cover')
const boughtWrapper = document.querySelector('.bought-wrapper')
const buyBtn = document.querySelector('.buy-btn')
const seeCart = document.querySelector('.see-cart')
const handleAppear = (boughtWrapper, boughtCover) => {
    boughtWrapper.style.animation = 'myAnim2 0.2s linear 0s 1 normal forwards'
    boughtCover.style.animation = 'myAnim2 0.2s linear 0s 1 normal forwards'
    setTimeout(() => {
        boughtCover.classList.add('bought-disabled')
        boughtWrapper.classList.add('bought-disabled')
        boughtCover.removeAttribute('style')
        boughtWrapper.removeAttribute('style')
    }, 300);
}
var urlString = window.location.href
const id = urlString.split('')
buyBtn.onclick = (e) => {
    e.preventDefault()
    boughtCover.classList.remove('bought-disabled')
    boughtWrapper.classList.remove('bought-disabled')
    seeCart.setAttribute('href', `${urlString}/addAndCart?quantiny=${parseInt(itemCounter.innerText)}`)
    continueBuy.setAttribute('href', `${urlString}/addAndContinue?quantiny=${parseInt(itemCounter.innerText)}`)
}
continueBuy.onclick = (e) => {
    handleAppear(boughtWrapper, boughtCover)
}
boughtCover.onclick = (e) => {
    e.preventDefault()
    handleAppear(boughtWrapper, boughtCover)
}
