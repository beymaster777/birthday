var reasons=["Lastly I hope you have a good year!",
"First of all hope you have a good birthday",
"With lots of tasty food",
"and with a lot of sweets"
]

;
var images = [
"IMG_0979.jpeg",
"IMG_0978.jpeg",
"IMG_0980.jpeg",
"IMG_0981.jpeg"
]




var i=1;
function nextslide() {
document.getElementById("reasontext").innerHTML= reasons[i];
document.getElementById("album").src= images[i];
i++;
if(i>3) {i=0;}
document.getElementById('audio').play();
}

