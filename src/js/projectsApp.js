
// PROJECT DETAILS BUTTONS

const detailsButtonOne = document.getElementById('projectOneButton');
detailsButtonOne.addEventListener('click', function(){
	const descriptionOne = document.getElementById('projectOneDescription');
	if (descriptionOne.classList.contains('open')){
		descriptionOne.classList.remove('open');
		detailsButtonOne.innerText = 'Show Project Details';
	} else {
		descriptionOne.classList.add('open');
		detailsButtonOne.innerText = 'Hide Project Details';
	}
	open = !open;
});


const detailsButtonTwo = document.getElementById('projectTwoButton');
detailsButtonTwo.addEventListener('click', function(){
	const descriptionTwo = document.getElementById('projectTwoDescription');
	if (descriptionTwo.classList.contains('open')){
		descriptionTwo.classList.remove('open');
		detailsButtonTwo.innerText = 'Show Project Details';
	} else {
		descriptionTwo.classList.add('open');
		detailsButtonTwo.innerText = 'Hide Project Details';
	}
	open = !open;
});


const detailsButtonThree = document.getElementById('projectThreeButton');
detailsButtonThree.addEventListener('click', function(){
	const descriptionThree = document.getElementById('projectThreeDescription');
	if (descriptionThree.classList.contains('open')){
		descriptionThree.classList.remove('open');
		detailsButtonThree.innerText = 'Show Project Details';
	} else {
		descriptionThree.classList.add('open');
		detailsButtonThree.innerText = 'Hide Project Details';
	}
	open = !open;
});





// PROJECTS CAROUSEL

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let projectSlides = document.getElementsByClassName("projectSlide");
	if (n > projectSlides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = projectSlides.length}
	for (i = 0; i < projectSlides.length; i++) {
		projectSlides[i].style.display = "none";  
	}
	projectSlides[slideIndex-1].style.display = "block";
  }