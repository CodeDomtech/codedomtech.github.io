// FADE IN ANIMATION

const cards = document.querySelectorAll(
    '.service-card, .project-card, .stat-box'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';

        }

    });

}, {
    threshold: 0.2
});


cards.forEach(card => {

    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.7s ease';

    observer.observe(card);

});