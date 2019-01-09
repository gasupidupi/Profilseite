function navReinRaus() {
 document.getElementById("menu1").classList.toggle("display");
 document.getElementById("menu2").classList.toggle("display");
 document.getElementById("menu3").classList.toggle("display");
 document.getElementById("menu4").classList.toggle("display");

 document.getElementById("content").classList.toggle("blur");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("up").style.display = "block";
  } else {
    document.getElementById("up").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
