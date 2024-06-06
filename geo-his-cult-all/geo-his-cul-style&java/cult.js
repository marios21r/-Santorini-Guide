document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.sidebar ul li');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close-btn');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetPopup = document.getElementById(targetId);
        
        popups.forEach(popup => {
          popup.style.display = 'none';
        });
  
        targetPopup.style.display = 'flex';
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none';
      });
    });
  });
  