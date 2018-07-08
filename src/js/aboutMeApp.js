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