const ham = document.querySelector('.hamburger');// select the humberger icon
const closeNow = document.querySelector('.closed'); // select the close image
const menuItems = document.querySelectorAll('.mobile-menu'); // select all menu items

function displayMenuNav() {
  document.querySelector('.mobile-container').classList.add('active');
  ham.classList.add('invisible');
}
ham.addEventListener('click', displayMenuNav); // create an event listener to activate the displayNav function

function closedButton() {
  document.querySelector('.mobile-container').classList.remove('active');
  ham.classList.remove('invisible');
}
closeNow.addEventListener('click', closedButton); // closes the menu nav section

menuItems.forEach((item) => {
  item.addEventListener('click', closedButton); // closes the menu nav section whenever any menu item is clicked
});

// popup window for works section
const projects = [
  {
    project_id: 'project1',
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the      industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and      scrambled it 1960s with the releaLorem Ipsum is simply      dummy text of the printing and typesetting industry.      Lorem Ipsum has been the industrys standard dummy text   ever since the 1500s, when an unknown      printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['codekit', 'GitHub', 'Javascript', 'Bootstrap', 'terminal', 'Codepen'],
    image: 'images/modal.png',
    link: ['https://alfred-kinyua.github.io/Mobile-portfolio./', 'https://alfred-kinyua.github.io/Mobile-portfolio./'],
  },
  {
    project_id: 'project2',
    name: 'Keeping track of hundreds of components',
    description: ' Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the      industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and      scrambled it 1960s with the releaLorem Ipsum is simply      dummy text of the printing and typesetting industry.      Lorem Ipsum has been the industrys standard dummy text   ever since the 1500s, when an unknown      printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['codekit', 'GitHub', 'Javascript', 'Bootstrap', 'terminal', 'Codepen'],
    image: 'images/modal.png',
    link: ['https://alfred-kinyua.github.io/Mobile-portfolio./', 'https://alfred-kinyua.github.io/Mobile-portfolio./'],
  },
  {
    project_id: 'project3',
    name: 'Keeping track of hundreds of components',
    description: ' Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the      industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and      scrambled it 1960s with the releaLorem Ipsum is simply      dummy text of the printing and typesetting industry.      Lorem Ipsum has been the industrys standard dummy text   ever since the 1500s, when an unknown      printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['codekit', 'GitHub', 'Javascript', 'Bootstrap', 'terminal', 'Codepen'],
    image: 'images/modal.png',
    link: ['https://alfred-kinyua.github.io/Mobile-portfolio./', 'https://alfred-kinyua.github.io/Mobile-portfolio./'],
  },
  {
    project_id: 'project4',
    name: 'Keeping track of hundreds of components',
    description: ' Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the      industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and      scrambled it 1960s with the releaLorem Ipsum is simply      dummy text of the printing and typesetting industry.      Lorem Ipsum has been the industrys standard dummy text   ever since the 1500s, when an unknown      printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['codekit', 'GitHub', 'Javascript', 'Bootstrap', 'terminal', 'Codepen'],
    image: 'images/modal.png',
    link: ['https://alfred-kinyua.github.io/Mobile-portfolio./', 'https://alfred-kinyua.github.io/Mobile-portfolio./'],
  },
  {
    project_id: 'project5',
    name: 'Keeping track of hundreds of components',
    description: ' Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the      industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and      scrambled it 1960s with the releaLorem Ipsum is simply      dummy text of the printing and typesetting industry.      Lorem Ipsum has been the industrys standard dummy text   ever since the 1500s, when an unknown      printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['codekit', 'GitHub', 'Javascript', 'Bootstrap', 'terminal', 'Codepen'],
    image: 'images/modal.png',
    link: ['https://alfred-kinyua.github.io/Mobile-portfolio./', 'https://alfred-kinyua.github.io/Mobile-portfolio./'],
  },
  {
    project_id: 'project6',
    name: 'Keeping track of hundreds of components',
    description: ' Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the      industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and      scrambled it 1960s with the releaLorem Ipsum is simply      dummy text of the printing and typesetting industry.      Lorem Ipsum has been the industrys standard dummy text   ever since the 1500s, when an unknown      printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['codekit', 'GitHub', 'Javascript', 'Bootstrap', 'terminal', 'Codepen'],
    image: 'images/modal.png',
    link: ['https://alfred-kinyua.github.io/Mobile-portfolio./', 'https://alfred-kinyua.github.io/Mobile-portfolio./'],
  },
];

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;

  const modals = document.querySelectorAll('.modal');

  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].project_id === modal.id) {
      modals.forEach((modal) => {
        const htmlBody = document.querySelector('body');
        const body = modal.lastElementChild;
        htmlBody.style.overflow = 'scroll';
        body.innerHTML = `<img class = "modal-img" src="${projects[i].image}" alt="">
                          <div class = "flexing">
                                <h3> ${projects[i].name} </h3>
                             <div id='project-buttons'>
                               <a class = "link" href="${projects[i].link[0]}" target="_blank">See Live <img src='images/liveicon.svg'></a>
                               <a class = "link" href="${projects[i].link[1]}" target="_blank">See Source <img src='images/liveicon2.png'></a>
                             </div>
                          </div>
                          <div id = "project-desc">                              
                                  <ul id="technologies">
                                  ${projects[i].technologies.map((technology) => `                                  
                                  <li class = "tech-type">${technology}</li>`).join(' ')}
                                  </ul > 
                                  <div id = "description-subsection">                              
                            
                         </div > 
                        
                              
                         <p class = "description">${projects[i].description}</p>                            
                                                        
                            </div > `;
      });

      modal.classList.add('active');
      overlay.classList.add('active');
    }
  }
}

function closeModal(modal) {
  if (modal == null) return;

  const htmlBody = document.querySelector('body');
  htmlBody.style.overflow = 'scroll';
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});


// wrire dynamic html 