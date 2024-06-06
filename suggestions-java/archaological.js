document.addEventListener("DOMContentLoaded", () => {
    const options = {
        threshold: 0.5
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    document.querySelectorAll('.site, .site-item').forEach(section => {
        observer.observe(section);
    });
});
