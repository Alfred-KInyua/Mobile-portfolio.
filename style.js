const ham = document.querySelector('.hamburger');// select the humberger icon 
const closeNow = document.querySelector('.closed'); // select the close image 
const menu_Items = document.querySelectorAll(".mobile-menu") //select all menu items 

function displayMenuNav() {
    document.querySelector('.mobile-container').classList.add('active');
    ham.classList.add('invisible');
   
} 
ham.addEventListener('click', displayMenuNav) // create an event listener to activate the displayNav function

function closedButton(){
    document.querySelector('.mobile-container').classList.remove('active');
    ham.classList.remove('invisible');  
} 
closeNow.addEventListener('click', closedButton) //closes the menu nav section

menu_Items.forEach((item) => {
    item.addEventListener('click', closedButton) //closes the menu nav section whenever any menu item is clicked 
});
