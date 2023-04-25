window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.padding = "10px 70px";
    document.getElementById("logo").style.padding ="20px 10px";
    document.getElementById("navbar").style.backgroundColor="#086972";
    document.getElementById("navbar").style.height="90px";
  } 
  else {
    document.getElementById("navbar").style.padding = "15px 70px";
    document.getElementById("logo").style.padding ="1px 10px";
    document.getElementById("navbar").style.backgroundColor="transparent"
    document.getElementById("logo").style.width="50px"
    document.getElementById("logo").style.height  ="50px"
  }
}