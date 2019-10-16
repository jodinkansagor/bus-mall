import { productData } from './api.js';
import { ItemArray } from './item-array.js';

const nodeListOfImgTags = document.querySelectorAll('img');
const nodeListOfRadioTags = document.querySelectorAll('input');
const items = new ItemArray(productData);

let numberOfTrials = 0;
let clickedItemsArray = [];

nodeListOfRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        const chosenItem = event.target.value;
        items.increaseClick(chosenItem, clickedItemsArray);
        initializeNewEventTrial();
    });
});

console.log(clickedItemsArray, 'clicked items array');

const initializeNewEventTrial = () => {
    numberOfTrials++;

    const randomItem1 = items.getItemAtRandom();

    let randomItem2 = items.getItemAtRandom();

    while (randomItem1.id === randomItem2.id) {
        randomItem2 = items.getItemAtRandom();
    }

    let randomItem3 = items.getItemAtRandom();
    while (randomItem3 === randomItem1 || randomItem3 === randomItem2) {
        randomItem3 = items.getItemAtRandom();
    }

    console.log(randomItem1.id);
    console.log(randomItem2.id);
    console.log(randomItem3.id);

    nodeListOfImgTags.forEach((imageTag, indexOfNodeList) => {
        if (indexOfNodeList === 0) {
            imageTag.src = randomItem1.img;
        } else if (indexOfNodeList === 1) {
            imageTag.src = randomItem2.img;
        } else if (indexOfNodeList === 2) {
            imageTag.src = randomItem3.img;
        }
    });

    nodeListOfRadioTags.forEach((radioTag, indexOfNodeList) => {
        if (indexOfNodeList === 0) {
            radioTag.value = randomItem1.id;
            items.increaseTimesShown(randomItem1);
        } else if (indexOfNodeList === 1) {
            radioTag.value = randomItem2.id;
            items.increaseTimesShown(randomItem2);
        } else if (indexOfNodeList === 2) {
            radioTag.value = randomItem3.id;
            items.increaseTimesShown(randomItem3);
        }
    });

    let newItems = new ItemArray(productData);

    nodeListOfRadioTags.forEach((radioTag) => {
        if (radioTag.value === randomItem1.id) {
            newItems.removeItemById(randomItem1.id);
        } else if (radioTag.value === randomItem2.id) {
            newItems.removeItemById(randomItem2.id);
        } else if (radioTag.value === randomItem3.id) {
            newItems.removeItemById(randomItem3.id);
            console.log(newItems);
        }
    });
};


initializeNewEventTrial();