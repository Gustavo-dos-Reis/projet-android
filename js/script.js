const itens = document.getElementById('itens');

document.addEventListener('DOMContentLoaded', function() {
    const listenNowBtn = document.getElementById('listenNowBtn');
    if (listenNowBtn) {
        listenNowBtn.addEventListener('click', function() {
            window.open('https://music.youtube.com/watch?v=tqxRidAWER8&list=OLAK5uy_ljWDekJVUfMOYniqd1mZ8l45Q2nAwk4ds');
        });
        
        listenNowBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        listenNowBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    const genreDropdown = document.getElementById('genreDropdown');
    if (genreDropdown) {
        genreDropdown.addEventListener('shown.bs.dropdown', function() {
            console.log('Dropdown de gêneros aberto');
        });
    }

    function adjustGallery() {
        const galleryItems = document.querySelectorAll('.album');
        const containerWidth = document.querySelector('.flex-container')?.offsetWidth;
        const itemSize = window.innerWidth < 600 ? 120 : 150;
        const itemsPerRow = containerWidth ? Math.max(1, Math.floor(containerWidth / (itemSize + 30))) : 4;
        
        document.querySelector('.flex-container')?.style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
    }


    window.addEventListener('resize', adjustGallery);
    adjustGallery(); // Executa uma vez ao carregar
});

// Funções utilitárias
function formatDate(dateString) {
    // Implementação para formatar datas
    return new Date(dateString).toLocaleDateString();
}

document.body.style.opacity = '0';
setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
}, 100);



function clickMenu() {
    if(itens.style.display == 'block' ) {
     itens.style.display = 'none'
    } else {
     itens.style.display = 'block'
    }
 }

 function mudoutamanho() {
     if(window.innerWidth >= 768) {
         itens.style.display = 'block'
     } else {
         itens.style.display = 'none'
     }
 }