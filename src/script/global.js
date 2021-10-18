var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nju-nav-scroll").style.top = "14px";
  } else {
    document.getElementById("nju-nav-scroll").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}