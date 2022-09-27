let element = document.querySelectorAll('.slide-active');

let main_image = document.getElementById('main_image');
let count = 0;

window.addEventListener('load', () => {
  start();
});
const start = () => {
  element[count].classList.add('active');
  element[count].classList.add('start');
  main_image.src = element[count].childNodes[1].src;
  count++;
  setInterval(function () {
    if (count > 0) {
      element[count - 1].classList.remove('active');
      element[count - 1].classList.remove('start');
    }
    if (count >= element.length) {
      count = 0;
    }
    element[count].classList.add('active');
    element[count].classList.add('start');
    main_image.src = element[count].childNodes[1].src;
    count++;
    console.log(count);
    console.log(element.length);
  }, 5000);
};
