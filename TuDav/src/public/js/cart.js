
const custName = document.querySelector('.cust-name')
const custPhone = document.querySelector('.cust-phone')
const custPhoneValidate = document.querySelector('.cust-phone-validate')
const custNameValidate = document.querySelector('.cust-name-validate')
const custAddressValidate = document.querySelector('.cust-address-validate')
const custBtn = document.querySelector('.cust-btn')
const step1 = document.querySelector('.step-1')
const step2 = document.querySelector('.step-2')
const custInfoForm = document.querySelector('.send-to')
const districtContainer = document.querySelector('.billing_address_2')
const payBank = document.querySelector('.pay-bank')
const payAsign = document.querySelector('.pay-asign')


var cookieString = document.cookie
var quantity = []
const quantinyContainers = document.querySelectorAll('.same-item-quanity')
const quantinyDecreaseBtns = document.querySelectorAll('.qunatiny-button-decrease')
const quantinyPlusBtns = document.querySelectorAll('.qunatiny-button-plus')
const noneItem = document.querySelector('.none-item')
const handleTotal = () => {
    var totalPrice = 0
    const totalPriceHTML = document.querySelector('.total-price')
    const itemPrices = document.querySelectorAll('.same-item-price')
    const newQuantinyContainers = document.querySelectorAll('.same-item-quanity')
    itemPrices.forEach((itemPrice, index) => {
        totalPrice += parseInt(itemPrice.innerHTML) * parseInt(newQuantinyContainers[index].innerHTML)
    })
    console.log(totalPrice)
    totalPriceHTML.innerHTML = `Tổng cộng: ${totalPrice}`
}
if (quantinyContainers.length > 0) {
    noneItem.style.display = 'none'
    cookieString.split(';').forEach((items, index) => {
        quantinyContainers[index].innerHTML = parseInt(items.slice(items.indexOf('=') + 1))
    })
 
    handleTotal()
    var quanity = []
    quantinyContainers.forEach((quantinyContainer) => {
        quanity.push(parseInt(quantinyContainer.innerHTML))
    })
    quantinyPlusBtns.forEach((quantinyPlusBtn, index) => {
        quantinyPlusBtn.onclick = () => {
            quanity[index]++
            quantinyContainers[index].innerHTML = quanity[index]
            handleTotal()
        }
    })
    quantinyDecreaseBtns.forEach((quantinyDecreaseBtn, index) => {
        quantinyDecreaseBtn.onclick = () => {
            quanity[index]--
            if (quanity[index] <= 1) {
                quanity[index] = 1
            }
            quantinyContainers[index].innerHTML = quanity[index]
            handleTotal()
        }
    })
}
else {
    noneItem.style.display = 'flex'
}

payBank.onchange = () => {
    payAsign.checked = !payBank.checked
}
payAsign.onchange = () => {
    payBank.checked = !payAsign.checked
}
const deleteItemBtns = document.querySelectorAll('.same-item-delete')
const trueDeleteBtn = document.querySelector('.delete-btn')
const deleteCover = document.querySelector('.delete-cover')
const cancelBtn = document.querySelector('.cancel-btn')
const deleteNote = document.querySelector('.delete-notification-container')
const itemsLinks = document.querySelectorAll('.same-item-link')
const billInfo = document.querySelector('.bill-info')
const billInfoItems = document.querySelectorAll('.bill-info-item')
const productIdContainer = document.querySelector('.product-ids')
const productQuantityContainer = document.querySelector('.product-quantity')
const totalPriceContainer = document.querySelector('#total-price')
// Delete product 
function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
deleteItemBtns.forEach((deleteItemBtn, index) => {
    deleteItemBtn.onclick = () => {
        deleteNote.classList.remove('bought-disabled')
        deleteCover.classList.remove('bought-disabled')
        trueDeleteBtn.onclick = () => {
            billInfoItems[index].remove()
            delete_cookie(itemsLinks[index].getAttribute('href').slice(6))
            handleTotal()
            const newQuantinyContainers = document.querySelectorAll('.same-item-quanity')
            deleteNote.classList.add('bought-disabled')
            deleteCover.classList.add('bought-disabled')
            if (newQuantinyContainers.length === 0) {
                noneItem.style.display = 'flex'
            }
        }
        cancelBtn.onclick = () => {
            deleteNote.classList.add('bought-disabled')
            deleteCover.classList.add('bought-disabled')
        }
    }
})


custBtn.onclick = (e) => {
    const district = document.querySelector('select[name="calc_shipping_district"] option[selected="selected"]')
    const totalPrice = document.querySelector('.total-price').innerHTML
    if (custName.value === "") {
        custNameValidate.style.display = "block"
        e.preventDefault();
    }
    if (custPhone.value === "") {
        custPhoneValidate.style.display = "block"
        e.preventDefault();
    }
    if (custPhone.value === "") {
        custAddressValidate.style.display = "block"
        e.preventDefault();
    }
    if (custName.value !== "" && custPhone.value !== "" && custPhone.value !== "" && localStorage.district !== '<option value="">Quận / Huyện</option>' && district !== null) {
        step1.style.display = 'none'
        step2.style.display = 'block'
        
        e.preventDefault()
    }


    var productId = ''
    var productQuanity = ''
    const newItemsLinks = document.querySelectorAll('.same-item-link')
    const newQuantinyContainers = document.querySelectorAll('.same-item-quanity')
    const productPrice = totalPrice.slice(totalPrice.indexOf(': ') + 2)
    newItemsLinks.forEach((itemsLink, index) => {
        productQuanity = productQuanity.concat(`${newQuantinyContainers[index].innerHTML};`)
        productId = productId.concat(`${itemsLink.getAttribute('href').slice(6)};`)
    })
    productIdContainer.setAttribute('value', productId)
    productQuantityContainer.setAttribute('value', productQuanity)
    totalPriceContainer.setAttribute('value', productPrice)
    
    
    const FS = document.querySelector('.f-s-process')
    FS.style.width = '274px'
    if (payAsign.checked || payBank.checked) {
        custInfoForm.submit()
    }
}