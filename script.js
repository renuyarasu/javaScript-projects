// JavaScript Projects
console.clear();

let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = '#E34';
        } else if (count > 0) {
            value.style.color = '#064';
        } else {
            value.style.color = '#666';
        }

        value.textContent = count;
    })
})