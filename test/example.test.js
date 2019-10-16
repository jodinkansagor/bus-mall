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

test('gets the entire item object from the array by its id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const items = new ItemArray(productData);
    const bananaObject = {
        clicks: 0,
        id: 'banana',
        img: '../assets/banana.jpg',
        name: 'Banana Slicer',
        timesShown: 0
    };
    const itemYouWantObject = items.getItemById('banana');

    //Act 
    // Call the function you're testing and set the result to a const
   

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(bananaObject, itemYouWantObject);
});


test('increases value of click by one', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const items = new ItemArray(productData);
    const oneMoreBanana = {
        clicks: 1,
        id: 'banana',
        img: '../assets/banana.jpg',
        name: 'Banana Slicer',
        timesShown: 0
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const banana = items.getItemById('banana');
    const bananaObject = items.increaseClick(banana);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(bananaObject, oneMoreBanana);
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
        img: '../assets/bag.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'banana',
        name: 'Banana Slicer',
        img: '../assets/banana.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'bathroom',
        name: 'iPad Toilet Paper Roll Dispenser',
        img: '../assets/bathroom.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'boots',
        name: 'Exposed Toe Rainboots',
        img: '../assets/boots.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'breakfast',
        name: 'The All-in-One Breakfast Maker',
        img: '../assets/breakfast.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'bubblegum',
        name: 'Meatball Bubble Gum',
        img: '../assets/bubblegum.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'chair',
        name: 'Modern Chair',
        img: '../assets/chair.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'cthulhu',
        name: 'Cthulhu Action Figure',
        img: '../assets/cthulhu.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'dog-duck',
        name: 'Duck Beak Muzzle for Dog',
        img: '../assets/dog-duck.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'dragon',
        name: 'Can of Dragon Meat',
        img: '../assets/dragon.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'pen',
        name: 'Plastic Utencil Pen',
        img: '../assets/pen.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'scissors',
        name: 'Pizza Scissors',
        img: '../assets/scissors.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'sweep',
        name: 'Baby Sweeping Onesie',
        img: '../assets/sweep.png',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'tauntaun',
        name: 'Children\'s Tauntaun Sleeping Bag',
        img: '../assets/tauntaun.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'usb',
        name: 'Tentacle USB',
        img: '../assets/usb.gif',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'water-can',
        name: 'World\'s Worst Watering Can',
        img: '../assets/water-can.jpg',
        clicks: 0,
        timesShown: 0
    },
    {
        id: 'wine-glass',
        name: 'Wine Glass That Will Definitely Spill',
        img: '../assets/wine-glass.jpg',
        clicks: 0,
        timesShown: 0
    }];

    //Act 
    // Call the function you're testing and set the result to a const
    // const shark = items.getItemById('shark');
    const sharkRemoved = items.removeItemById('shark');
    const sharkObject = getItems();
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(sharkObject, oneLessShark);
});