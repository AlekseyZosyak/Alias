
function timer() {

    const time = document.querySelector('span[data-time]');

    let second = 10;

    const timer = setInterval(() => {
        if (second > 0) {
            second -= 1;
            time.textContent = second;
        } else {
            time.textContent = "finish";
            clearInterval(timer);
        };
    }, 1000);
};

export default timer;