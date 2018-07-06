const modalScreen = document.getElementById('modalScreen');

const openModal = function(){
    document.body.classList.add('modalOpen');
};

const closeModal = function(){
    document.body.classList.remove('modalOpen');
};

const openModalButton = document.getElementById('openModal');
openModalButton.addEventListener('click', openModal);

const closeModalButton = document.getElementById('closeModal');
closeModalButton.addEventListener('click', closeModal);






/* PROJECTS CAROUSEL/SLIDESHOW */
.carouselContent li{
	list-style: none;
}






// var hyperlinks = document.querySelectorAll('a');
// hyperlinks.forEach(function(elem){
// 	elem.addEventListener('mouseover', mouseOver);
// 	elem.addEventListener('mouseout', mouseOut);
// })
// function mouseOver(){
// 	this.style.fontSize = '24px';
// }
// function mouseOut(){
// 	this.style.fontSize = '16px';
// }



// const detailsButtonOne = document.getElementById('showDetailsOne');
// detailsButtonOne.addEventListener('click', function(){
// 	const descriptionOne = document.querySelector('#projectOneDescription');
// 	if (descriptionOne.classList.contains('open')){
// 		descriptionOne.classList.remove('open');
// 		detailsButtonOne.innerText = 'Show Details';
// 	} else {
// 		descriptionOne.classList.add('open');
// 		detailsButtonOne.innerText = 'Hide Details';
// 	}
// 	open = !open;
// });


// const detailsButtonTwo = document.getElementById('showDetailsTwo');
// detailsButtonTwo.addEventListener('click', function(){
// 	const descriptionTwo = document.querySelector('#projectTwoDescription');
// 	if (descriptionTwo.classList.contains('open')){
// 		descriptionTwo.classList.remove('open');
// 		detailsButtonTwo.innerText = 'Show Details';
// 	} else {
// 		descriptionTwo.classList.add('open');
// 		detailsButtonTwo.innerText = 'Hide Details';
// 	}
// 	open = !open;
// });


// const detailsButtonThree = document.getElementById('showDetailsThree');
// detailsButtonThree.addEventListener('click', function(){
// 	const descriptionThree = document.querySelector('#projectThreeDescription');
// 	if (descriptionThree.classList.contains('open')){
// 		descriptionThree.classList.remove('open');
// 		detailsButtonThree.innerText = 'Show Details';
// 	} else {
// 		descriptionThree.classList.add('open');
// 		detailsButtonThree.innerText = 'Hide Details';
// 	}
// 	open = !open;
// });


// const modalScreen = document.getElementById('modal-screen');

// const openModal = function(){
// 	modalscreen.classList.remove('modal-open);
// };
// const closeModal = function(){
// 	modalscreen.classList.remove('modal-open);
// };

// const viewBioBtn = document.getElementById('viewBio');
// viewBioBtn.addEventListener('click', openModal);

// const closeBioBtn = document.getElementById('closeBio');
// closeBioBtn.addEventListener('click', closeModal);
