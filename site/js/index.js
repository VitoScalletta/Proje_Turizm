window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.padding = "1px 70px";
    document.getElementById("navbar").style.backgroundColor="#086972"
    document.getElementById("navbar").style.height="85px"
  } 
  else {
    document.getElementById("navbar").style.padding = "10px 70px";
    document.getElementById("navbar").style.backgroundColor="transparent"
    document.getElementById("logo").style.width="50px"
    document.getElementById("logo").style.height  ="50px"
  }
}
//kelime değiştirme
const myHeading = document.getElementById("my-heading");
const words = ["Düğün","Kına", "Nişan","Mezuniyet","İş Yemekleri"]; 
let i = 0;

setInterval(() => {
  myHeading.textContent = words[i];
  i = (i + 1) % words.length;
}, 1000); 
window.onscroll = function() {scrollFunction()};

$(".testmonial_slider_area").owlCarousel({
  autoplay: true,
  slideSpeed:1000,
  items : 3,
  loop: true,
  nav:true,
  navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
  margin: 30,
  dots: true,
  responsive:{
    320:{
      items:1
    },
    767:{
      items:2
    },
    600:{
      items:2
    },
    1000:{
      items:3
    }
  }
  
});
