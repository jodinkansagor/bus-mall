import { productData } from './api.js';
import { ItemArray } from './item-array.js';
import { displayFinalResults } from './final-results.js';

const nodeListOfImgTags = document.querySelectorAll('img');
const nodeListOfRadioTags = document.querySelectorAll('input');
let items = new ItemArray(productData);

let numberOfTrials = 1;
let clickedItemsArray = [];
let shownIemsArray = [];

nodeListOfRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        if (numberOfTrials === 25) {
            displayFinalResults();
            return;
        }
        const chosenItem = event.target.value;
        items.increaseClick(chosenItem, clickedItemsArray);
        numberOfTrials++;
        initializeNewEventTrial();
    });
});

const initializeNewEventTrial = () => {


    let randomItem1 = items.getItemAtRandom();
    let randomItem2 = items.getItemAtRandom();

    while (randomItem1.id === randomItem2.id) {
        randomItem2 = items.getItemAtRandom();
    }
    let randomItem3 = items.getItemAtRandom();
    while (randomItem3 === randomItem1 || randomItem3 === randomItem2) {
        randomItem3 = items.getItemAtRandom();
    }

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
            items.increaseTimesShown(randomItem1, shownIemsArray);
        } else if (indexOfNodeList === 1) {
            radioTag.value = randomItem2.id;
            items.increaseTimesShown(randomItem2, shownIemsArray);
        } else if (indexOfNodeList === 2) {
            radioTag.value = randomItem3.id;
            items.increaseTimesShown(randomItem3, shownIemsArray);
        }
    });

    items = new ItemArray(productData);
    let usedItemsArray = [];
    
    items.removeItemById(randomItem1.id);
    items.removeItemById(randomItem2.id);
    items.removeItemById(randomItem3.id);
    usedItemsArray.push(randomItem1, randomItem2, randomItem3);

    console.log(clickedItemsArray);
    console.log(shownIemsArray);
};


initializeNewEventTrial();
