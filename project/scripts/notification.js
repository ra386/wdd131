const hamButton = document.querySelector('#menu-icon');
const navigation = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

