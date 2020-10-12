// Declarando variáveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');


// Página de Pré-loader
window.addEventListener('load', function () {
    var preloader = document.querySelector('.jl-preloader');
    preloader.classList.add('jl-fade-out');
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 2000);
});

// Abrindo e fechando informáções de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

// Abrindo e fechando Modal de Orçamento

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.jl-overlay');
        var orcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        orcamento.classList.toggle('jl-is-open');
        orcamento.classList.toggle('jl-slide-top-in');

    });
};

var postGallery = document.querySelector('.jl-post-gallery');
var portGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (portGalleryHeight - 270) + 'px';

//  ANIMANDO ELEMENTOS COM SCROLL com WAYPOINTS
var scroll = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint({
    element: scroll,
    handler: function () {
        scroll.classList.toggle('jl-fade-out');
    },
    offset: '80%'
});


