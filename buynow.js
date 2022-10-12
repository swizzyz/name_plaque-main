const purchase = document.querySelector('.buy-submit')


//Arrow function
buyNow=() =>{
    if (userInput.value === '') {
        alert('Please input a letter')
        userInput.focus()
    }
    else if (userInput.value.length > 15) {
        alert('You have exeeded the available letters')
        userInput.disabled= true
    }
    else {
        alert('Order Placed Successfully')
    }
    if (userLeterPreview.textContent === 'Your Name') {
        alert('Please input a custom letter')
        userInput.focus()
    }

}
purchase.addEventListener('click', buyNow)