const tl = gsap.timeline({defaults: {ease: "power1.out"}});

var imgContainer = [
     "./style/imgs/img1.jpg",
     "./style/imgs/img2.jpg",
     "./style/imgs/img3.jpg",
     "./style/imgs/img4.jpg",
     "./style/imgs/img5.jpg",    
];

var img = document.getElementById("welcome");

function imgChanger(num){
    var num = Math.floor(Math.random() * 5);
    img.style.backgroundImage = 'url("' + imgContainer[num] + '")';

}

imgChanger();

    tl.to(".slider", {y: "-100%", duration: 1.5});
    tl.to(".intro", {y: "100%", duration: 1.5});
    tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 0.6});
    tl.to(".phrase",{y : "0%", duration: 1, stagger: 0.25 });
    tl.to(".decoration_line", {x: "10%", duration: 1});




