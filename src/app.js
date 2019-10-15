import { productData } from './api.js';
import { ItemArray } from './item-array.js';

// const itemImageTag = document.querySelectorAll('img');
// const itemRadioTag = document.querySelectorAll('input');
// const continueButton = document.getElementById('continue-button');


const items = new ItemArray(productData);


console.log(items.getItemById('shark'));

console.log(items.getItemAtRandom());

const shark = items.getItemById('shark');

console.log(shark);

console.log(items.increaseClick(shark));

console.log(items.increaseTimesShown(shark));


