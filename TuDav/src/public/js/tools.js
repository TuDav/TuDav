const handleSurf = (array, btnLeft, btnRight, index) => {
    const MAItemMargin = parseInt(window.getComputedStyle(array[0]).marginInline.slice(0, -2))
    const MAItemBorder = parseInt(window.getComputedStyle(array[0]).border.slice(0, -2))
    const MAItemWidth = array[0].getBoundingClientRect().width
    const goLeftDistance = MAItemMargin * 2 + MAItemWidth
    let i = 0;
    const goLeft = () => {
       i++
       if (i === 1) {
          i = -(array.length - index)
       }
       array.forEach(MAItem => {
          MAItem.style.transform = `translateX(${goLeftDistance * i}px)`
       })
 
    }
    const goRight = () => {
       i--
       if (i === -(array.length - index + 1)) {
          i = 0
       }
       array.forEach(MAItem => {
          MAItem.style.transform = `translateX(${goLeftDistance * i}px)`
       })
    }
    btnLeft.onclick = function (e) {
       e.preventDefault()
       goLeft()
    }
    btnRight.onclick = function (e) {
       e.preventDefault()
       goRight()
    }
 
 }
 
 const appearUp = (inputArray, bottom) => {
    inputArray.forEach(function (MAPitem) {
       const MAPitemIcons = Array.from(MAPitem.childNodes[3].children)
       const MAPitemIconBottm = parseInt(window.getComputedStyle(MAPitemIcons[0]).bottom.slice(0, -2))
       MAPitemIcons.forEach(function(MAPitemIcon, index){
        MAPitemIcon.style.transform = `translateY(${bottom * (index + 1)}px)`
       })
       
       MAPitem.onmouseenter = function (e) {
             e.preventDefault()
             MAPitemIcons.forEach(function (MAPitemIcon, index) {
                MAPitemIcon.style.transform = `translateY(${MAPitemIconBottm * (index + 1)}px)`
             })
          }
          MAPitem.onmouseleave = function () {
             MAPitemIcons.forEach(function (MAPitemIcon, index) {
                MAPitemIcon.style.transform = `translateY(${bottom * (index + 1)}px)`
             })
          }
    })
 }



 const findChilren = (inputComponent, child)=> {
   let array = [];
   const find = (inputComponent, child) => {
      for (let i = 0; i < inputComponent.children.length; i++) {
         if (inputComponent.children[i].className !== child) {
            if (inputComponent.children !== undefined) {
               find(inputComponent.children[i], child)
            } else ;
         } else { 
            array.push(inputComponent.children[i]) 
         }
      }
      return array
   }
   return find(inputComponent, child)
}
 
const appearUp2 = (btnContainer, inputArray, imgWidth, bottom, iconClass) => {
      
   btnContainer.forEach((btn) => {
      btn.setAttribute("style", `width: ${imgWidth}px; left: ${parseInt(window.getComputedStyle(inputArray[0]).paddingInline.slice(0, -2))}px`)
   })
   
      inputArray.forEach(function (productItem) {
         const MAPitemIcons = Array.from(findChilren(productItem, iconClass))
         MAPitemIcons.forEach(function (MAPitemIcon, index) {
            MAPitemIcon.style.transform = `translateY(${bottom * (index + 1)}px)`
         })
         productItem.onmouseenter = function (e) {
            e.preventDefault()
            MAPitemIcons.forEach(function (MAPitemIcon, index) {
               MAPitemIcon.setAttribute('style', `left: ${((imgWidth) / 6) * (index * 2 + 1)}px;transform: translateX(-50%)`)
            })
         }
         productItem.onmouseleave = function () {
            MAPitemIcons.forEach(function (MAPitemIcon, index) {
               MAPitemIcon.style.transform = `translateY(${bottom * (index + 1)}px)`
            })
         }
      })

   
}
export {handleSurf, appearUp, findChilren, appearUp2}