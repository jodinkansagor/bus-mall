import { clickedItemsArrayForResults } from './app.js';
import { items } from './app.js';
import { ItemArray } from './item-array.js';


const productSection = document.getElementById('product-section'); 
const resultsSection = document.getElementById('results-section');

export function displayFinalResults() {
    productSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const ctx = document.getElementById('chart').getContext('2d');

    // console.log(clickedItemsArrayForResults, 'clickedItemsForArray');
    
    // for (let i = 0; i < clickedItemsArrayForResults.length; i++) {
    //     let arrayOfClicks = clickedItemsArrayForResults.clicks;
    //     console.log(clickedItemsArrayForResults.clicks);
    //     console.log(arrayOfClicks);
    //     return arrayOfClicks;
    // }

    const data = [13, 4, 5];
    const labels = ['Tauntaun', 'USB', 'Baby'];

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Items Picked',
                data: data,
                backgroundColor: ['red', 'purple', 'pink']
            }]
        },
    });








}