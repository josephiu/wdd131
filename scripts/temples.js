
const mainnav = document.querySelector('.site-navigation')
const hambutton = document.querySelector('.hamburger');




hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show-nav');
	hambutton.classList.toggle('ham-animated');
});



// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	hambutton.classList.toggle('show');
// });