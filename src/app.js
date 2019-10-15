import { productData } from './api.js';
import { ItemArray } from './item-array.js';

const itemImageTag = document.querySelectorAll('img');
const itemRadioTag = document.querySelectorAll('input');
const continueButton = document.getElementById('continue-button');

let numberOfTrials = 0;

const initializeNewTrial = () => {
    numberOfTrials++;
    const items = new ItemArray(productData);

    const randomItem1 = items.getItemAtRandom();

    let randomItem2 = items.getItemAtRandom();

    while (randomItem1.id === randomItem2.id) {
        randomItem2 = items.getItemAtRandom();
    }

    let randomItem3 = items.getItemAtRandom();
    while (randomItem3 === randomItem1 || randomItem3 === randomItem2) {
        randomItem3 = items.getItemAtRandom();
    }

    itemImageTag.forEach((imageTag, indexOfNodeList) => {
        if (indexOfNodeList === 0) {
            imageTag.src = randomItem1.img;
        } else if (indexOfNodeList === 1) {
            imageTag.src = randomItem2.img;
        } else if (indexOfNodeList === 2) {
            imageTag.src = randomItem3.img;
        }
    });

    itemRadioTag.forEach((radioTag, indexOfNodeList) => {
        if (indexOfNodeList === 0) {
            radioTag.src = randomItem1.img;
            items.increaseTimesShown(randomItem1);
        } else if (indexOfNodeList === 1) {
            radioTag.src = randomItem2.img;
            items.increaseTimesShown(randomItem2);
        } else if (indexOfNodeList === 2) {
            radioTag.src = randomItem3.img;
            items.increaseTimesShown(randomItem3);
        }
    });
};

continueButton.addEventListener('click', initializeNewTrial);

initializeNewTrial();
