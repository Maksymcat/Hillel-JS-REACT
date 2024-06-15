let result = Math.floor(Math.random() * 9);
const image = document.querySelector(".myImage");
image.setAttribute('src', `images/${result}.jpg`)
if(result === 0){
    image.setAttribute('src','images/1.jpg')
}
