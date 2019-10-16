import { productData } from './api.js';
import { ItemArray } from './item-array.js';
import { displayFinalResults } from './final-results.js';

const nodeListOfImgTags = document.querySelectorAll('img');
const nodeListOfRadioTags = document.querySelectorAll('input');
export const items = new ItemArray(productData);

let numberOfTrials = 0;
let clickedItemsArray = [];
let shownIemsArray = [];

nodeListOfRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        if (numberOfTrials === 3) { 
            displayFinalResults();
            return;
        }
        
        const chosenItem = event.target.value;
        items.increaseClick(chosenItem, clickedItemsArray);
        numberOfTrials++;
        initializeNewEventTrial();
        return clickedItemsArray;
    });
});

const initializeNewEventTrial = () => {
    

    const randomItem1 = items.getItemAtRandom();
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

    let newItems = new ItemArray(productData);

    nodeListOfRadioTags.forEach((radioTag) => {
        if (radioTag.value === randomItem1.id) {
            newItems.removeItemById(randomItem1.id);
        } else if (radioTag.value === randomItem2.id) {
            newItems.removeItemById(randomItem2.id);
        } else if (radioTag.value === randomItem3.id) {
            newItems.removeItemById(randomItem3.id);
        
        }
    });
};

initializeNewEventTrial();
export const clickedItemsArrayForResults = clickedItemsArray;
