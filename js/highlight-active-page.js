function handleLocationChange(location) {
    let element1 = document.querySelectorAll('body div div main nav ul li a');
    let element2 = document.querySelectorAll('body div div main div div ul li a');

    for (let i = 0; i < element1.length; i++) {
        if (location === element1[i].href) {
            element1[i].classList.add('active');
            element2[i].classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded',
    () => handleLocationChange(document.location.href));