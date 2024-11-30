const icons = document.querySelectorAll('.icon');
const tooltip = document.querySelector('.tooltip');
const className = document.getElementById('class-name');
const classDescription = document.getElementById('class-description');
const classImg = document.getElementById('class-img');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        const name = e.currentTarget.getAttribute('data-name');
        const description = e.currentTarget.getAttribute('data-description');
        const imgSrc = e.currentTarget.getAttribute('data-img');
        
        className.textContent = name;
        classDescription.textContent = description;
        classImg.src = imgSrc;

        tooltip.style.display = 'block';
    });

    icon.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    icon.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });
});
