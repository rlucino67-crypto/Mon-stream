//Mot de passe :
const codeSecret = "Lucino123"; // Change "MON_CODE_2024" par ce que tu veux

// On demande le code à l'utilisateur
let saisie = prompt("Accès restreint. Entrez le mot de passe :");

if (saisie === codeSecret) {
    // Si c'est bon, on affiche le contenu du site
    document.body.style.display = "block";
} else {
    // Si c'est faux, on affiche un message et on redirige
    alert("Mot de passe incorrect !");
    window.location.href = "https://www.google.com";
}


// Fonctions Lightbox
       function openLightbox(src, title, isVideo = false) {
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');
    
    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox').classList.remove('hidden');

    if (isVideo) {
        video.src = src;
        video.muted = false;
        video.volume = 1.0;
        video.classList.remove('hidden');
        img.classList.add('hidden');
        video.load();
        video.play(); // Lance la vidéo automatiquement

        video.play().then(() => {
        // Une fois que la vidéo tourne, on re-force le son
        video.muted = false;
    }).catch(error => {
        console.log("Le navigateur demande une interaction manuelle pour le son");
    });
    } else {
        img.src = src;
        img.classList.remove('hidden');
        video.classList.add('hidden');
        video.pause(); // Arrête la vidéo si on ouvre une image
    }
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const video = document.getElementById('lightbox-video');
    document.getElementById('lightbox').classList.add('hidden');
    video.pause(); // Stop le son quand on ferme
    document.body.style.overflow = 'auto';
}

        // Fonction de filtrage
        function filtrer(categorie) {
            const items = document.querySelectorAll('.card-item');
            const titre = document.getElementById('section-titre');
            
            // Changer le titre selon le clic
            if(categorie === 'categorie-photo') titre.innerHTML = '<span class="w-1 h-6 bg-red-600 rounded-full"></span> Mes Photos';
            else if(categorie === 'categorie-fichier') titre.innerHTML = '<span class="w-1 h-6 bg-red-600 rounded-full"></span> Mes Fichiers';
            else titre.innerHTML = '<span class="w-1 h-6 bg-red-600 rounded-full"></span> Tout Découvrir';

            items.forEach(item => {
                if (categorie === 'tout' || item.classList.contains(categorie)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }


function rechercher() {
    // 1. On récupère la saisie de l'utilisateur
    let input = document.getElementById('search-input').value.toLowerCase();
    
    // 2. On récupère toutes les cartes (vidéos et photos)
    let cartes = document.getElementsByClassName('card-item');

    // 3. On filtre
    for (let i = 0; i < cartes.length; i++) {
        // On récupère le titre (h3) de chaque carte
        let titre = cartes[i].querySelector('h3').innerText.toLowerCase();

        if (titre.includes(input)) {
            cartes[i].style.display = ""; // Affiche si ça correspond
        } else {
            cartes[i].style.display = "none"; // Cache si ça ne correspond pas
        }
    }
}        