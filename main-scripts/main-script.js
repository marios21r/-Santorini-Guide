document.getElementById("main5").addEventListener("mouseenter", function() {
    this.classList.add("hovered");
});

document.getElementById("main5").addEventListener("mouseleave", function() {
    this.classList.remove("hovered");
});

document.addEventListener("DOMContentLoaded", function() {
    const textContainers = document.querySelectorAll(".text-first-insider");

    textContainers.forEach(container => {
        container.addEventListener("click", function(event) {
            // Remove "expanded" class from all text containers
            textContainers.forEach(container => {
                container.classList.remove("expanded");
            });

            // Add "expanded" class only to the clicked text container
            this.classList.add("expanded");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const main4 = document.getElementById("main4");
    const stats = main4.querySelectorAll(".stat-num, .icon-stats");

    main4.addEventListener("mouseover", function() {
        stats.forEach(stat => {
            stat.style.opacity = "1";
        });
    });

    main4.addEventListener("mouseout", function() {
        stats.forEach(stat => {
            stat.style.opacity = "0";
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const imgGeo = document.querySelector(".img-geo");

    imgGeo.addEventListener("click", function() {
        // Redirect to the history.html page
        window.location.href = "historySection.html";
    });
});