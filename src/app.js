import { productData } from './api.js';
import { ItemArray } from './item-array.js';

const itemImageTag = document.querySelectorAll('img');
const itemRadioTag = document.querySelectorAll('input');
const continueButton = document.getElementById('continue-button');

let correctAnswer;

continueButton.addEventListener('click', initializeNewItems);


