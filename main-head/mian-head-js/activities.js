document.addEventListener('DOMContentLoaded', function() {
    const activities = document.querySelectorAll('.activity');

    activities.forEach(activity => {
        activity.addEventListener('click', () => {
            activity.scrollIntoView({ behavior: 'smooth' });
        });
    });
});