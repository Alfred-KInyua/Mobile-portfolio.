const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const bar = document.querySelector('.bar');
const barHandler = () => {
  bar.className += ' barWhite';
};

// bar.addEventListener('click', () => barHandler);
bar.addEventListener('click', () => {
  barHandler();
});

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

// create form validation section
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

form.addEventListener('submit', (event) => {
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
    title: 'Math Game',
    description:
      'A Javascript game application that is both interactive and supports mobile devices. The game allows a player to provide a random number between 1-20, if a user provides the correct number, he wins with high marks, if a user provides a wrong number, the game advises the player as to whether the number provided is higher or lower than the hidden correct number.',
    featuredImage: 'images/featuredguess.png',
    image: 'images/featuredguesss.png',
    teachnologies: ['Bootstrap', 'Jest', 'Selenium', 'Javascript'],
    versionURL: 'https://github.com/Alfred-KInyua/play-a-game-',
    sourceURL: 'https://dancing-gnome-b2b6e0.netlify.app/',
  },
  {
    title: 'Bookstore Application',
    description:
      'An online bookstore delivery app that allows bookstore owners and authors to add, retrieve and delete books from a remote REST API.(CRUD)',
    featuredImage: 'images/featuredbook.png',
    image: 'images/featuredbooks.png',
    teachnologies: ['Bootstrap', 'RSpec', 'HTML', 'JavaScript'],
    versionURL: 'https://github.com/Alfred-KInyua/bookstore-website',
    sourceURL:
      'https://deploy-preview-6--endearing-hamster-aaf349.netlify.app/',
  },
  {
    title: 'Fetch a list of countries data from an API request ',
    description:
      'An application that fetches data via a RESTful API service, and provides data such as population, the capital city, and coat of arms in a simple and elegant design',
    featuredImage: 'images/counts.png',
    image: 'images/green.png',
    teachnologies: ['Bootstrap', 'Jest', 'Selenium', 'ReactJs'],
    versionURL: 'https://github.com/Alfred-KInyua/rest-countries',
    sourceURL:
      'https://deploy-preview-1--precious-rabanadas-551da9.netlify.app/',
  },
  {
    title: 'Space Travelers',
    description:
      'Build a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions. the webiste uses real live data from the SpaceX API.',
    featuredImage: 'images/spacetravel.png',
    image: 'images/spacet.png',
    teachnologies: ['Redux Toolkit', 'JavaScript', 'Babel', 'ReactJs'],
    versionURL: 'https://github.com/Alfred-KInyua/spacetravellorshub',
    sourceURL: 'https://deploy-preview-56--cute-cranachan-7538ff.netlify.app/',
  },
  {
    title: 'Leaderboard App',
    description:
      'A JavaScript project for the Leaderboard list app. The game captures players" scores and stores them in local storage for persistence. The scores are arranged from highest to lowest.  This app was developed using the provided Wireframe, with styling data, focused on functionality',
    featuredImage: './images/featuredLeader.png',
    image: 'images/featuredLeaderr.png',
    teachnologies: ['Bootstrap', 'RSpec', 'Jest', 'JavaScript'],
    versionURL: 'https://github.com/Alfred-KInyua/Leaderboard-setup-project',
    sourceURL:
      'https://630759fc00a34408cef91404--luminous-kitten-cfcb1a.netlify.app/',
  },
  {
    title: 'Team Viewer ',
    description:
      'A react single page application that allows employers or team managers to group their teams according to tasks given, this will ensure all team managers are aware of team members activities and groups they belong to',
    featuredImage: 'images/teams.png',
    image: 'images/teamsOne.png',
    teachnologies: ['Bootstrap', 'jest', 'ReactJs', 'Redux'],
    versionURL: 'https://github.com/Alfred-KInyua',
    sourceURL: 'https://mellifluous-custard-8f3222.netlify.app/',
  },
];
const projectHTML = projects.map((obj) => {
  const tech = obj.technologies;
  return `<div class="grid-item project">
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
});

const project = projectHTML.join('');

// let project = '';
// for (const obj of projects) {
//   const tech = obj.teachnologies;
//   project += `<div class="grid-item project">
//     <div class="item-image">
//         <img src="${obj.image}" alt="featured-image">
//     </div>
//     <div class="item-description">
//         <div class="item-title">
//             <h2>${obj.title}</h2>
//         </div>
//        <ul class="technologies">
//           <li> <a href="#">${tech[0]}</a></li>
//           <li> <a href="#">${tech[1]}</a></li>
//           <li> <a href="#">${tech[2]}</a></li>
//           <li> <a href="#">${tech[3]}</a></li>
//       </ul>
//       <div class="green-btn">
//         <a href="" data-modal-target="#project-modal" class="viewProject">See Project</a>
//     </div>
//    </div>
// </div>`;
// }

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
