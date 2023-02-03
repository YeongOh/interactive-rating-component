'use strict';

const cardRate = document.querySelector('.card-rate');
const cardThankyou = document.querySelector('.card-thankyou');
const submitBtn = document.querySelector('.btn-submit');
const ratingBtn = document.querySelectorAll('.rating-btn');

let rating = -1;

let selected;

ratingBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    return handleClick(e);
  });
});

document.querySelector('.btn-submit').addEventListener('click', () => {
  // error if no rating is elected
  if (rating === -1) {
    document.querySelector('.error').classList.remove('hidden');
    return;
  }
  cardRate.classList.add('hidden');
  cardThankyou.classList.remove('hidden');
  document.querySelector(
    '.card-select'
  ).innerHTML = `You selected ${rating} out of 5`;
});

function handleClick(e) {
  // hide the error if it had one
  document.querySelector('.error').classList.add('hidden');

  // if the same rating is clicked
  if (e.target.classList.contains('selected')) {
    e.target.classList.remove('selected');
    rating = -1;
    return;
  }

  // remove the previously selected
  if (selected) {
    selected.classList.remove('selected');
  }

  // set the target as selected
  selected = e.target;
  rating = e.target.innerHTML;
  e.target.classList.add('selected');
}
