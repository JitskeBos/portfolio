var scrollDown = document.getElementById("bekijk");

function scrolling () {
window.scroll({
    top: 800, 
    left: 0, 
    behavior: 'smooth'
  });
}
scrollDown.addEventListener ("click", scrolling);

function BackToTop () {
  window.scroll({
    top: 0,
    left: 0, 
    behavior: 'smooth'
  });
}
addEventListener("load", BackToTop);