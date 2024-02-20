
function createCloudAnimation(teg, src, arraySelectorClass) {
    const bg = document.querySelector('body');
    bg.style.backgroundColor = '#C1EFFF';

    const element = document.createElement(teg);

    arraySelectorClass.forEach((item) => {
        element.classList.add(item);
    });

    element.src = src;
    bg.append(element);
    console.log(element);
}

export default createCloudAnimation;

