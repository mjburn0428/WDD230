function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("open"); 
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


const today = new Date();
const longDay = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(today);
const headerDate = document.querySelector(".headerDate");
headerDate.innerHTML = `<em>${longDay}</em>`;


let modifyDate = new Date(document.lastModified).toLocaleString();
const dateModified = document.querySelector('#last-update');
dateModified.textContent = `Last Updated: ${modifyDate}`;


const copyright = document.querySelector('#copyright-year');
let currentYear = today.getFullYear();
copyright.textContent=`${currentYear}`;
