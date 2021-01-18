const display = document.querySelector('.display');
// const decrement = document.querySelector('.decr');
// const reset = document.querySelector('.res');
// const increment = document.querySelector('.incr');
const btns = document.querySelectorAll('.block-items');

let count = 0;


// decrement.addEventListener('click', function() {
//    count--;
//    if(count < 0) {
//       display.style.color = 'red';
//    }
//    display.textContent = count;
// });

// reset.addEventListener('click', function() {
//    display.textContent = 0;
//    display.style.color = 'black';
// });

// increment.addEventListener('click', function() {
//    count++;
//    if(count > 0) {
//       display.style.color = 'green';
//    }
//    display.textContent = count;
// });

// if(display.textContent < 0) {
//    display.style.color = 'red';
// }

btns.forEach(function(btn) {
   btn.addEventListener('click', function(e) {
      let styles = e.currentTarget.classList;
      if(styles.contains('incr')) {
         count++;
      } else if(styles.contains('decr')) {
         count--;
      } else if(styles.contains('res')) {
         count = 0;
      }
      display.textContent = count;
      if(count < 0) {
      display.style.color = 'red';
      } else if(count > 0) {
         display.style.color = 'green';
      } else {
         display.style.color = '#000';
      }
   });
});
