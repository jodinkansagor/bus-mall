export class ItemArray {
    constructor(items) {
        this.items = items.slice(); //makes a copy so we don't fuck up the og
    }

    // 1. getItems - simplifies our initial this. statement
    getItems() {
        return this.items; 
    }

    // 2. getItemsById - gets the specific image from the id we want from the array to display to the page and returns that item (the object).
    getItemById(randomItemId, itemArray) {
        let itemIsSame;
        itemArray.forEach(item => {    
            if (randomItemId === item.id) {
                itemIsSame = item;
            }
        });
        return itemIsSame;
    }
    // 3. getItemAtRandom - generates a random number and uses that number to find an item at that index in the array.
    getItemAtRandom() {
        const randomItemIndex = Math.floor(Math.random() * (this.items.length - 1));
        return this.items[randomItemIndex];
    }

    // 4. increaseClick - increases the property "click" in the item object.

    increaseClick(clickedItem, clickedItemsArray) {
        let chosenItemObject = this.getItemById(clickedItem, clickedItemsArray);

        if (!chosenItemObject) {
            chosenItemObject = {
                id: clickedItem,
                clicks: 1
            };
            clickedItemsArray.push(chosenItemObject);
        } else {
            chosenItemObject.clicks++;
        }
        console.log(chosenItemObject, 'increase click object');
    }
            
//  5. increaseTimesShown - increases the property 'timesShown" on our item object.
    increaseTimesShown(shownItem, items) {
        if (!shownItem) {
            shownItem = {
                id: shownItem.value,
                name: shownItem.name,
                img: shownItem.img,
                timesShown: 1
            };
            items.push(shownItem);
        } else {
            shownItem.clicks++;
        }
    }

// 6. remove an item by it's id
    removeItemById(someId) {
        this.items.forEach((item, i) => {
            if (someId === item.id) {
                this.items.splice(i, 1);
            }
        });
    }

}




    // removeItemById(itemId) {
    //     this.items.forEach((itemId, index) => {
    //         if (itemId === item.id) {
    //             this.items.splice(index, 1);
    //         }
    //         return;
    //     });
    // }
