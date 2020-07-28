// ============== Chapter53-58 Task 1

var images = ['images/others/1.jpg', 'images/others/2.jpg', 'images/others/3.jpg', 'images/others/4.png']; 
var imgs = document.getElementById("images");
for (var i = 0; i <  images.length; i++) {
    imgs.innerHTML += "<img src='" + images[i] + "' alt='image' class = 'format' onclick='openimage(" + i + ");'>"
}


function openimage(x) {
    var modal = document.getElementById('modal');
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display = "block";
    var imgmodal = document.getElementById("modal-img");
    imgmodal.src = images[x]; 
}

function onClosedImagModal() {
    var modal = document.getElementById('modal');
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550);
}











//============== Chapter53-58 Task 2

// var para = document.getElementById("para");
// var currentFont = 20;
// para.style.fontSize = (currentFont+"px").toString();
// function zoomIn(){
//     currentFont+=10;
//     para.style.fontSize = (currentFont+"px").toString();

// }
// function zoomOut(){
//     currentFont-=10;
//     para.style.fontSize = (currentFont+"px").toString();

// }