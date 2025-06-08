//script.js

//project filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        //toggle active state
        document.querySelectorAll('.filter-btn')
            .forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        document.querySelectorAll('.project-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

//contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', evt => {
        let valid = true;
        ['name','email','message'].forEach(id => {
            const el = document.getElementById(id);
            if (!el.value.trim()) valid = false;
        });
        if (!valid) {
            evt.preventDefault();
            alert('Please complete all fields before sending.');
        }
    });
    
}

//blog post scroll-reveal
document.addEventListener('scroll', () => {
    document.querySelectorAll('#blog article').forEach(article => {
        const top = article.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            article.classList.add('fade-in');
        }
    });
});

