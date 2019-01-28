function navReinRaus() {
 document.getElementById("menu1").classList.toggle("display");
 document.getElementById("menu2").classList.toggle("display");
 document.getElementById("menu3").classList.toggle("display");
 document.getElementById("menu4").classList.toggle("display");
 document.getElementById("menu5").classList.toggle("display");
 document.getElementById("menu6").classList.toggle("display");
 document.getElementById("menu7").classList.toggle("display");
 document.getElementById("menu8").classList.toggle("display");
 document.getElementById("menu9").classList.toggle("display");
 document.getElementById("menu10").classList.toggle("display");
 document.getElementById("menuIndex").classList.toggle("display");
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
