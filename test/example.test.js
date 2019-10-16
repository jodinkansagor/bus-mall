// IMPORT MODULES under test here:
import { ItemArray } from '../src/item-array.js';
import { productData } from '../src/api.js';

const test = QUnit.test;

test('does function return entire array of items', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const items = new ItemArray(productData);
    const itemsInArray = items.getItems();
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(itemsInArray, productData);
});

// test('gets the entire item object from the array by its id', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations
//     const items = new ItemArray(productData);
//     const bananaObject = {
//         id: 'banana',
//         img: '../assets/banana.jpg',
//         name: 'Banana Slicer',
//     };
//     const itemYouWantObject = items.getItemById('banana', itemArray);

//     //Act 
//     // Call the function you're testing and set the result to a const
   

//     //Assert
//     // Make assertions about what is expected valid result
//     assert.deepEqual(bananaObject, itemYouWantObject);
// });


test('increases value of click by one', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const items = new ItemArray(productData);
    let clickedItemsArray = [{
        id: 'banana',
        clicks: 1
    }];
    const oneMoreBanana = [{
        id: 'banana',
        clicks: 2
    }];

    //Act 
    // Call the function you're testing and set the result to a const
    const bananaInClickedArray = items.increaseClick('banana', clickedItemsArray);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(bananaInClickedArray, oneMoreBanana);
});

test('increases value of timesShown by one', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const items = new ItemArray(productData);
    const oneMoreShark = {
        clicks: 0,
        id: 'shark',
        img: '../assets/shark.jpg',
        name: 'Children\'s Shark Sleeping Bag',
        timesShown: 1
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const shark = items.getItemById('shark');
    const sharkObject = items.increaseTimesShown(shark);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(sharkObject, oneMoreShark);
});

test('remove item from array by the id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const items = new ItemArray(productData);
    const oneLessShark = [{
        id: 'bag',
        name: 'Star Wars Themed Suitcase',
        img: '../assets/bag.jpg'
    },
    {
        id: 'banana',
        name: 'Banana Slicer',
        img: '../assets/banana.jpg'
    },
    {
        id: 'bathroom',
        name: 'iPad Toilet Paper Roll Dispenser',
        img: '../assets/bathroom.jpg'
    },
    {
        id: 'boots',
        name: 'Exposed Toe Rainboots',
        img: '../assets/boots.jpg'
    },
    {
        id: 'breakfast',
        name: 'The All-in-One Breakfast Maker',
        img: '../assets/breakfast.jpg'
    },
    {
        id: 'bubblegum',
        name: 'Meatball Bubble Gum',
        img: '../assets/bubblegum.jpg'
    },
    {
        id: 'chair',
        name: 'Modern Chair',
        img: '../assets/chair.jpg'
    },
    {
        id: 'cthulhu',
        name: 'Cthulhu Action Figure',
        img: '../assets/cthulhu.jpg'
    },
    {
        id: 'dog-duck',
        name: 'Duck Beak Muzzle for Dog',
        img: '../assets/dog-duck.jpg'
    },
    {
        id: 'dragon',
        name: 'Can of Dragon Meat',
        img: '../assets/dragon.jpg'
    },
    {
        id: 'pen',
        name: 'Plastic Utencil Pen',
        img: '../assets/pen.jpg'
    },
    {
        id: 'scissors',
        name: 'Pizza Scissors',
        img: '../assets/scissors.jpg'
    },
    {
        id: 'sweep',
        name: 'Baby Sweeping Onesie',
        img: '../assets/sweep.png'
    },
    {
        id: 'tauntaun',
        name: 'Children\'s Tauntaun Sleeping Bag',
        img: '../assets/tauntaun.jpg'
    },
    {
        id: 'usb',
        name: 'Tentacle USB',
        img: '../assets/usb.gif'
    },
    {
        id: 'water-can',
        name: 'World\'s Worst Watering Can',
        img: '../assets/water-can.jpg'
    },
    {
        id: 'wine-glass',
        name: 'Wine Glass That Will Definitely Spill',
        img: '../assets/wine-glass.jpg'
    }];

    //Act 
    // Call the function you're testing and set the result to a const
    // const shark = items.getItemById('shark');
    const sharkRemoved = items.removeItemById('shark');
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(sharkRemoved, oneLessShark);
});