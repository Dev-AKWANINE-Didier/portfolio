const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const sunIcon = themeToggle.getElementsByClassName("bi-brightness-high")[0];
    const moonIcon = themeToggle.getElementsByClassName("bi-moon")[0];

    // Par défaut : sombre
    // Vérifie si un thème a été sauvegardé
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      body.classList.add("white-mode");
      sunIcon.classList.remove("theme-icon-hidden");
      moonIcon.classList.add("theme-icon-hidden");
    }

    // Quand on clique
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("white-mode");

      sunIcon.classList.toggle("theme-icon-hidden");
      moonIcon.classList.toggle("theme-icon-hidden");

      // Sauvegarde du mode
      if (body.classList.contains("white-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });




const toggleBtn = document.getElementById("toggle-btn");
const navbarLinks = document.getElementById("navbarlinks")

const biList = toggleBtn.getElementsByClassName("bi-list")[0];
const bixLg = toggleBtn.getElementsByClassName("bi bi-x-lg")[0];

toggleBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("showLinks");
    biList.classList.toggle('toggle-btn-icon')
    bixLg.classList.toggle('toggle-btn-icon')
})



const translate = document.getElementById('translate')
const translateSection = document.getElementById('translate-section')

translate.addEventListener("click", () => {
   translateSection.classList.toggle("showTranslateSection");
})



const allBtn = document.getElementById('all-project');
const webBtn = document.getElementById('web-app');
const telecomBtn = document.getElementById('telecomm-tool');

const allProjects = document.querySelectorAll('.project');
const webProjects = document.querySelectorAll('.web-project');
const telecomProjects = document.querySelectorAll('.telecom-project');

function showProjects(category) {
    allProjects.forEach(p => p.style.display = 'none'); // cacher tout

    switch(category) {
        case 'all':
            allProjects.forEach(p => p.style.display = 'block');
            break;
        case 'web':
            webProjects.forEach(p => p.style.display = 'block');
            break;
        case 'telecom':
            telecomProjects.forEach(p => p.style.display = 'block');
            break;
    }
}

// Événements clic
allBtn.addEventListener('click', () => showProjects('all'));
webBtn.addEventListener('click', () => showProjects('web'));
telecomBtn.addEventListener('click', () => showProjects('telecom'));

// Affichage par défaut
showProjects('all');







