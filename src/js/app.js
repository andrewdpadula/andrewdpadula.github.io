var navUlList = document.querySelectorAll('nav > ul > li');
navUlList.forEach(function(elem){
	elem.addEventListener('mouseover', mouseOver);
	elem.addEventListener('mouseout', mouseOut);
})
function mouseOver(){
	this.style.fontSize = '24px';
}
function mouseOut(){
	this.style.fontSize = '16px';
}


var footerLink = document.querySelectorAll('footer > a');
footerLink.forEach(function(elem){
	elem.addEventListener('mouseover', mouseOver);
	elem.addEventListener('mouseout', mouseOut);
})
function mouseOver(){
	this.style.fontSize = '24px';
}
function mouseOut(){
	this.style.fontSize = '16px';
}