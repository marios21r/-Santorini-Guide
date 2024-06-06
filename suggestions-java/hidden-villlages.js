function toggleVillageInfo(element) {
    const villageInfo = element.querySelector('.village-info');
    if (villageInfo.style.display === 'block') {
        villageInfo.style.display = 'none';
    } else {
        document.querySelectorAll('.village-info').forEach(info => info.style.display = 'none');
        villageInfo.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.village')) {
        document.querySelectorAll('.village-info').forEach(info => info.style.display = 'none');
    }
});
