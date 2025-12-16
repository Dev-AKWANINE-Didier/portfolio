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
    const navbarLinks = document.getElementById("navbarlinks");
    const biList = toggleBtn.querySelector(".bi-list");
    const bixLg = toggleBtn.querySelector(".bi-x-lg");
    
    // Fonction unique pour ouvrir/fermer et changer l'icône
    function toggleMenu() {
        const isOpen = navbarLinks.classList.toggle("showLinks");
        
        // On gère les icônes en fonction de si le menu est ouvert ou non
        biList.classList.toggle('toggle-btn-icon', isOpen);
        bixLg.classList.toggle('toggle-btn-icon', !isOpen);
    }
    
    // 1. Clic sur le bouton Toggle
    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Empêche le clic de se propager à la fenêtre (window)
        toggleMenu();
    });
    
    // 2. Clic n'importe où sur la page
    window.addEventListener("click", (e) => {
        // Si le menu est ouvert ET que le clic n'est PAS sur le menu ou le bouton
        if (navbarLinks.classList.contains("showLinks") && 
            !navbarLinks.contains(e.target) && 
            !toggleBtn.contains(e.target)) {
            
            toggleMenu(); 
        }
    });
    
    
    
    
    const translate = document.getElementById('translate');
    const translateSection = document.getElementById('translate-section');
    
    // 1. Gestion du bouton Toggle
    translate.addEventListener("click", (e) => {
       // Empêche le clic de remonter jusqu'à window immédiatement
       e.stopPropagation(); 
       translateSection.classList.toggle("showTranslateSection");
    });
    
    // 2. Détection du clic en dehors de la section
    window.addEventListener("click", (e) => {
       // On vérifie si la section est affichée ET si le clic est en dehors de la section
       if (translateSection.classList.contains("showTranslateSection") && 
           !translateSection.contains(e.target)) {
           
           translateSection.classList.remove("showTranslateSection");
       }
    });
    



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







