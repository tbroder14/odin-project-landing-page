// when image is clicked, it's placed into the upper image placeholder
//  target an element/one of the four images and set it as a variable 
// 

let pictureOne = document.querySelector('.picture-one');
let pictureTwo = document.querySelector('.picture-two');
let pictureThree = document.querySelector('.picture-three');
let pictureFour = document.querySelector('.picture-four');
let placeHolder = document.querySelector('.placeholder-image')

pictureOne.onclick = function(){
    placeHolder.src = pictureOne.src
}

pictureTwo.onclick = function(){
    placeHolder.src = pictureTwo.src
}

pictureThree.onclick = function(){
    placeHolder.src = pictureThree.src
}

pictureFour.onclick = function(){
    placeHolder.src = pictureFour.src
}

let BTC = document.querySelector('.top-button');

BTC.onclick = async function(){
    console.log("1")
    await getBitcoin()
    console.log('3')
}

async function getBitcoin(){
    await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => BTC.innerHTML = (data.bpi.USD.rate));
    console.log('2')
}

