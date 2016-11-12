var designwidth=750;
var fontSize=100;
function fontsize() {
    var relwidth=document.documentElement.clientWidth;
    relFontSize=fontSize*relwidth/designwidth;
    document.getElementsByTagName("html")[0].style.fontSize=relFontSize+"px";
}
fontsize();
window.onresize=fontsize;

