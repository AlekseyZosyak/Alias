
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





// const ball = document.createElement('img');
// const ballIndex = element[0]['src'];
//     ball.src = ballIndex;
//     ball.className = 'ball mode';
//     FON.append(ball);

// const cloud1 = document.createElement('img');
// const cloud1Index = element[1]['src'];
//     cloud1.src = cloud1Index;
//     cloud1.className = 'cloud1 mode';
//     FON.append(cloud1);

// const cloud2 = document.createElement('img');
// const cloud2Index = element[2]['src'];
//     cloud2.src = cloud2Index;
//     cloud2.className = 'cloud2 mode';
//     FON.append(cloud2);

// const cloud3 = document.createElement('img');
// const cloud3Index = element[3]['src'];
//     cloud3.src = cloud3Index;
//     cloud3.className = 'cloud3 mode';
//     FON.append(cloud3);

// const cloud4 = document.createElement('img');
// const cloud4Index = element[4]['src'];
//     cloud4.src = cloud4Index;
//     cloud4.className = 'cloud4 mode';
//     FON.append(cloud4);

// const cloud5 = document.createElement('img');
// const cloud5Index = element[5]['src'];
//     cloud5.src = cloud5Index;
//     cloud5.className = 'cloud5 mode';
//         FON.append(cloud5);

// const floor1 = document.createElement('img');
// const floor1Index = element[6]['src'];
//     floor1.src = floor1Index;
//     floor1.className = 'floor1 mode mode-floor';
//     FON.append(floor1);

// const floor2 = document.createElement('img');
// const floor2Index = element[7]['src'];
//     floor2.src = floor2Index;
//     floor2.className = 'floor2 mode mode-floor';
//     FON.append(floor2);

// const floor3 = document.createElement('img');
// const floor3Index = element[8]['src'];
//     floor3.src = floor3Index;
//     floor3.className = 'floor3 mode mode-floor';
//     FON.append(floor3);
