function toggleText(id) {
    const texts = document.querySelectorAll('.culinary-text');
    const titles = document.querySelectorAll('.culinary-semi-title');
    
    texts.forEach(text => {
        if (text.id !== id) {
            text.classList.remove('active');
        }
    });

    const textElement = document.getElementById(id);

    if (textElement.classList.contains('active')) {
        textElement.classList.remove('active');
    } else {
        textElement.classList.add('active');
    }
}

document.addEventListener('click', function(event) {
    const texts = document.querySelectorAll('.culinary-text');
    const titles = document.querySelectorAll('.culinary-semi-title');
    
    if (!event.target.closest('.culinary-ask')) {
        texts.forEach(text => {
            text.classList.remove('active');
        });
    }
});




function toggleOptions(id) {
    const options = document.getElementById(id);
    const allOptions = document.querySelectorAll('.personal-options');

    // Close all other options
    allOptions.forEach(option => {
        if (option !== options) {
            option.style.display = 'none';
        }
    });

    // Toggle the clicked option
    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.personal-box');
    if (!isClickInside) {
        document.querySelectorAll('.personal-options').forEach(option => {
            option.style.display = 'none';
        });
    }
});

function toggleOptions(id) {
    const options = document.getElementById(id);

    // Toggle the clicked option
    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
}
