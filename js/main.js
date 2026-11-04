// Смена прозрачности шапки при скролле
const header = document.getElementById('h');
window.addEventListener('scroll', () => {
    header.classList.toggle('s', window.scrollY > 50);
}, { passive: true });

// Имитация отправки формы для демонстрации
const form = document.getElementById('f');
const okMsg = document.getElementById('ok');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Отправка...';
        btn.style.opacity = '0.7';
        btn.disabled = true;
        
        setTimeout(() => {
            okMsg.style.display = 'block';
            form.reset();
            
            btn.textContent = originalText;
            btn.style.opacity = '1';
            btn.disabled = false;
            
            setTimeout(() => {
                okMsg.style.display = 'none';
            }, 5000);
        }, 800);
    });
}

// Intersection Observer (fade-up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});