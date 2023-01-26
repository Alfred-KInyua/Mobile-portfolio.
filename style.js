const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
  menu.classList.toggle('active');
  logo.classList.toggle('active');
});

document.querySelectorAll('.menu').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
    overlay.classList.remove('active');
  });
});

//create form validation section
const targetEmailInput = document.getElementById('email');
const displayError = document.querySelector('#feedback');
const form = document.querySelector('form');

function showError() {
  displayError.innerHTML = '<strong>The email must be lowercase!</strong>';
  displayError.style.color = '#ff0000';
}

function showPassed() {
  displayError.textContent = '<strong>Email is valid. Form submitted</strong>';
  displayError.style.color = '#00ff00';
}

form.addEventListener('submit', function (event) {
  const pattern = /^[a-z0-9@.]+$/;
  if (!pattern.test(targetEmailInput.value)) {
    showError();
    event.preventDefault();
  } else {
    showPassed();
  }
});

// popup up window

const projects = [
  {
    title: 'To do list Application Program',
    description:
      ' My todo-ist app has a simplified, user-friendly GUI letting you navigate a powerful set of features, myToDo stands out of the crowd when it comes to helping with task completion.',
    featuredImage: 'images/todolist.jpg',
    image: 'images/todolist.jpg',
    teachnologies: ['Bootstrap', 'RSpec', 'Selenium', 'Ruby on Rails'],
    versionURL: 'https://github.com/Alfred-KInyua',
    sourceURL: 'https://alfred-kinyua.github.io/to-do-list-project-/',
  },
  {
    title: 'Fetch list of countries data from API request ',
    description:
      'A Countries App that fetches data via a RESTful API, and provides the countries data such as population, the capital city, and coat of arms in a simple and elegant design',
    featuredImage: 'images/counts.png',
    image: 'images/counts.jpg',
    teachnologies: ['Bootstrap', 'RSpec', 'Selenium', 'Ruby on Rails'],
    versionURL: 'https://github.com/Alfred-KInyua',
    sourceURL:
      'https://deploy-preview-1--precious-rabanadas-551da9.netlify.app/',
  },
  {
    title: 'Space Travelers',
    description:
      'This project was developed using SPA (Single Page Application) Redux toolkit and Jest testing. It consumes API rocket and mission data and allows users to reserve and or cancel their preferred rockets. It also allows users to choose any mission they are interested in. The chosen rockets and missions are then displayed in the profile section of the SPA',
    featuredImage: 'images/space.jpg',
    image: 'images/space.jpg',
    teachnologies: ['Bootstrap', 'RSpec', 'Selenium', 'Ruby on Rails'],
    versionURL: 'https://github.com/Alfred-KInyua',
    sourceURL: 'https://deploy-preview-56--cute-cranachan-7538ff.netlify.app/',
  },
  {
    title: 'Leaderboard App',
    description:
      'A JavaScript project for the Leader-board list app, developed using Webpack and ES6 features, notably modules. This app was developed using a working version of the app following the provided Wireframe, with styling data, focused on functionality.',
    featuredImage: './images/scores.jpg',
    image: 'images/scores.jpg',
    teachnologies: ['Bootstrap', 'RSpec', 'Selenium', 'Ruby on Rails'],
    versionURL: 'https://github.com/Alfred-KInyua',
    sourceURL:
      'https://630759fc00a34408cef91404--luminous-kitten-cfcb1a.netlify.app/',
  },
  {
    title: 'Clear and Clean ',
    description:
      'A Javascript page that has a beautiful scroll that is different from other types of scrolls, the page loads fast, is mobile friendly, and is easy to use and apply',
    featuredImage: 'images/imani2.png',
    image: 'images/imani.png',
    teachnologies: ['Bootstrap', 'RSpec', 'ReactJs', 'Ruby on Rails'],
    versionURL: 'https://github.com/Alfred-KInyua',
    sourceURL: 'https://shimmering-dieffenbachia-3c5c3d.netlify.app/',
  },
  {
    title: 'Math Game',
    description:
      'A Javascript game application that is both interactive and supports mobile devices. The game allows a player to provide a random number between 1-20, if a user provides the correct number, he wins with high marks. When a user provides a wrong number, the game advises the player as to whether the number provided is higher or lower than the hidden correct number.',
    featuredImage: 'images/gamesmall.png',
    image: 'images/game.png',
    teachnologies: ['Bootstrap', 'Jest', 'Selenium', 'Javascript'],
    versionURL: 'https://github.com/Alfred-KInyua',
    sourceURL: 'https://dancing-gnome-b2b6e0.netlify.app/',
  },
];

let project = '';
for (const obj of projects) {
  const tech = obj.teachnologies;
  project += `<div class="grid-item project">
    <div class="item-image">
        <img src="${obj.image}" alt="featured-image">
    </div>
    <div class="item-description">
        <div class="item-title">
            <h2>${obj.title}</h2>
        </div>
       <ul class="technologies">
          <li> <a href="#">${tech[0]}</a></li>
          <li> <a href="#">${tech[1]}</a></li>
          <li> <a href="#">${tech[2]}</a></li>
          <li> <a href="#">${tech[3]}</a></li>
      </ul>
      <div class="green-btn">
        <a href="" data-modal-target="#project-modal" class="viewProject">See Project</a>
    </div>
   </div>
</div>`;
}

document.querySelector('.projects').innerHTML = project;

const projectDetailsModal = document.querySelector('.modal');

document.querySelectorAll('.viewProject').forEach((button, key) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.modal-overlay').classList.add('active');
    projectDetailsModal.classList.toggle('active');

    const proj = projects[key];

    div = `<div class="modal-header">
             <span class="close">&times;</span>
            </div>
            <div class="modal-body">
             <div class="project-image">
               <img class="featured-image" src=${proj.featuredImage} alt="project-image" />
             </div>
             <div class="project-title">
               <h2>${proj.title}</h2>
               <ul class="view-btn view-1">
                 <li>
                   <a class="see-live" href=${proj.sourceURL}>See Live
                   <img src="images/liveicon.svg" alt="live icon">
                   </a>
                 </li>
                 <li>
                   <a class="see-progress" href=${proj.versionURL}>See Progress
                     <img src="images/liveicon2.png" alt="#">
                   </a>
                   
                 </li>
               </ul>
             </div>
             <ul class="frameworks">
             <li>${proj.teachnologies[0]}</li>
             <li>${proj.teachnologies[1]}</li>
             <li>${proj.teachnologies[2]}</li>
             <li>${proj.teachnologies[3]}</li>
             </ul>
             <div class="project-description">
               <p>${proj.description}</p>
             </div>
            </div>
            <ul class="view-btn view-2">
            <li>
              <a class="see-live" href=${proj.sourceURL}>See Live
              <img src="images/liveicon.svg" alt="find">
              </a>
            </li>
            <li>
              <a class="see-progress" href=${proj.versionURL}>See Progress
                <img src="images/liveicon2.png" alt="github">
              </a>
              
            </li>
          </ul>
          `;
    document.querySelector('.modal').innerHTML = div;

    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('.modal-overlay').classList.remove('active');
      projectDetailsModal.classList.remove('active');
    });
  });
});
