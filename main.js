// ===============================================
// SUPMTIMEKNES - JAVASCRIPT SIMPLIFIÉ
// ===============================================

// 1. COMPTEURS ANIMÉS
// Anime les chiffres de 0 jusqu'à leur valeur cible
document.querySelectorAll('.stat-number').forEach(counter => {
    const target = +counter.dataset.target; // Récupère la valeur cible
    let count = 0;
    const increment = target / 50; // Divise en 50 étapes
    
    // Fonction pour mettre à jour le compteur
    const updateCount = () => {
        if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count);
            setTimeout(updateCount, 40); // Mise à jour toutes les 40ms
        } else {
            counter.textContent = target; // Valeur finale
        }
    };
    
    // Démarrer l'animation quand l'élément est visible
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.disconnect(); // Arrêter l'observation après démarrage
        }
    });
    observer.observe(counter);
});



// 2. SYSTÈME D'ONGLETS (Formations)
// Bascule entre Ingénierie et Management
function showTab(tabName) {
    // Cacher tous les grids
    document.querySelectorAll('.programs-grid').forEach(grid => {
        grid.classList.add('hidden');
    });
    
    // Afficher le grid sélectionné
    document.getElementById(tabName).classList.remove('hidden');
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// 3. ANNÉE ACTUELLE DANS LE FOOTER
document.getElementById('year').textContent = new Date().getFullYear();

// 4. SCROLL FLUIDE
// Permet un défilement doux vers les sections
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});