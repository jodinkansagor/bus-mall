import { clickedItemsArray } from './app.js';
import { shownItemsArray } from './app.js';


const productSection = document.getElementById('product-section'); 
const resultsSection = document.getElementById('results-section');
let arrayOfClicks = [];
let arrayOfIds = [];
let arrayOfShown = [];
let arrayOfShownIds = [];


export function displayFinalResults() {
    productSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const ctx = document.getElementById('chart').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');


    for (let i = 0; i < clickedItemsArray.length; i++) {
        arrayOfClicks.push(clickedItemsArray[i].clicks);
    }


    for (let i = 0; i < clickedItemsArray.length; i++) {
        arrayOfIds.push(clickedItemsArray[i].id);
    } 
    console.log(arrayOfClicks);
    console.log(arrayOfIds);
    const data = arrayOfClicks;
    const labels = arrayOfIds;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Items Picked',
                data: data,
                backgroundColor: ['red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue']
            }]
        },
    });

    for (let i = 0; i < shownItemsArray.length; i++) {
        arrayOfShown.push(shownItemsArray[i].timesShown);
    }

    for (let i = 0; i < shownItemsArray.length; i++) {
        arrayOfShownIds.push(shownItemsArray[i].id);

    } 
      
    console.log(shownItemsArray);
    console.log(arrayOfShown, 'array of times shown');
    console.log(arrayOfShownIds, 'array of shown ids');

    const data2 = arrayOfShown;
    const labels2 = arrayOfShownIds;

    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: labels2,
            datasets: [{
                label: 'Items Shown',
                data: data2,
                backgroundColor: ['red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue', 'red', 'purple', 'pink', 'green', 'blue']
            }]
        },
    });
}

