const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    menu.classList.toggle('active');
    logo.classList.toggle('active');
    });

    document.querySelectorAll('.menu').forEach((link)=>{
    link.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    logo.classList.remove('active');
    overlay.classList.remove('active');

});
});

// validation
const form=document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    const email=document.querySelector('#email').value;
    const errorMsg=document.querySelector('.error-message');
    if (email!== email.toLowerCase()) {
        e.preventDefault();
        errorMsg.style.display='flex';
    }


});

// CReating local repo/
const firstName=document.querySelector('#firstname');
const lastName=document.querySelector('#lastname');
const emailAddress=document.querySelector('#email');
const message=document.querySelector('#message');

function storeData(){
let formData={
    'firstname':firstName.value,
    'lastname':lastName.value,
    'email':emailAddress.value,
    'message':message.value
}
localStorage.setItem('form-data',JSON.stringify(formData)); 
}

function fetchData(){
    let data=localStorage.getItem('form-data');
    if(data){
        fetch=JSON.parse(data);
        firstName.value = fetch.firstname;
        lastName.value = fetch.lastname;
        emailAddress.value = fetch.email;
        message.text = fetch.messsage;
    }
}

window.onload = () => {
    firstName.addEventListener('input',  storeData());
    lastName.addEventListener('input',  storeData());
    emailAddress.addEventListener('input',  storeData());
    message.addEventListener('input',  storeData());

    fetchData();
  };

// displaying the pop up window 

let projects=[
    {
        title:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"images/modal.png",
        image:"images/ImgPlaholder.png",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",
        sourceURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",

    },
    {
        title:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"images/modal.png", 
        image:"images/ImgPlaholder.png",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",
        sourceURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",

    },
    {
        title:"Keeping track of hundreds of components",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"images/modal.png",
        image:"images/ImgPlaholder.png",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",
        sourceURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",


    },
    {
        title:"Keeping ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage:"images/modal.png",
        image:"images/ImgPlaholder.png",
        teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
        versionURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",
        sourceURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",

    },
    {
      title:"Keeping ",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage:"images/modal.png",
      image:"images/ImgPlaholder.png",
      teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
      versionURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",
      sourceURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",

  },
  {
    title:"Keeping ",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage:"images/modal.png",
    image:"images/ImgPlaholder.png",
    teachnologies:['Bootstrap', 'RSpec','Selenium', 'Ruby on Rails'],
    versionURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",
    sourceURL:"https://alfred-kinyua.github.io/Mobile-portfolio./",

}
];

let project='';
for(let obj of projects){
    let tech=obj.teachnologies;
    project+=`<div class="grid-item project">
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
      <div class="green-color-btn">
        <a href="" data-modal-target="#project-modal" class="viewProject">See Project</a>
    </div>
   </div>
</div>`;

}

document.querySelector('.projects').innerHTML=project;

const projectDetailsModal=document.querySelector('.modal');

document.querySelectorAll('.viewProject').forEach((button, key)=>{
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        document.querySelector('.modal-overlay').classList.add('active');
        projectDetailsModal.classList.toggle('active');

        let proj=projects[key];

        div=`<div class="modal-header">
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
                   <img src="images/liveicon2.png" alt="">
                   </a>
                 </li>
                 <li>
                   <a class="see-progress" href=${proj.versionURL}>See Progress
                     <img src="images/liveicon.svg" alt="github">
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
              <img src="images/liveicon2.png" alt="">
              </a>
            </li>
            <li>
              <a class="see-progress" href=${proj.versionURL}>See Progress
                <img src="images/liveicon.svg" alt="github">
              </a>
              
            </li>
          </ul>
          `;
          document.querySelector('.modal').innerHTML=div;

            document.querySelector('.close').addEventListener('click', ()=>{
            document.querySelector('.modal-overlay').classList.remove('active');
            projectDetailsModal.classList.remove('active');
        });  
      
    });

});






