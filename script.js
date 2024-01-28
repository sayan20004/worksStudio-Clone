const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

function loaderAnimation(){
    let loader = document.querySelector(".loader");
    setTimeout(function(){
        loader.style.top = "-100%"
    },4200)
}
loaderAnimation()

// hover with image effect
const elems = document.querySelectorAll(".elem");
const imageCanvas = document.querySelector(".page2")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("data-image");
        imageCanvas.style.backgroundImage = `url(${image})`;
    })
})