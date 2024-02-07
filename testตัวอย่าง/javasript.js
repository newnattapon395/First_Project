window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("head").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("head").style.backgroundColor = "rgb(66, 66, 66)" ;
  } else {
    document.getElementById("head").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("head").style.backgroundColor = "rgb(0, 0, 0,0.1)" ;

  }
}