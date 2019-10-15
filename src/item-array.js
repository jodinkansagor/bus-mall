export class ItemArray {
    constuctor(items) {
        this.items = items.slice(); //makes a copy so we don't fuck up the og
    }

    // 1. getItems - simplifies our initial this. statement
    getItems() {
        return this.items; 
    }
    
    // 2. getItemsById - gets the specific image from the id we want from the array to display to the page and returns that item.
    getItemById(randomItemId) {
        let itemIsSame;
        this.items.trees.array.forEach(randomItem => {
            if (randomItemId === randomItem.id) {
                itemIsSame = randomItem;
            }
        });
        return itemIsSame;
    }
    // 3. getItemAtRandom - generates a random number and uses that number to find an item at that index in the array.
    getItemAtRandom() {
        const randomItemIndex = Math.floor(Math.random() * this.items.length);
        return this.items[randomItemIndex];
    }

    // 4. increaseClick - increases the property "click" in the item object.
    // parameters - item id from the random item generated and the id from the clicked item
    increaseClick(randomItemId, clickedItemId) {
        if (randomItemId === clickedItemId) {
            this.items.clicks = this.items.clicks + 1;
        }
    }

// // 5. increaseTimesShown - increases the property 'timesShown" on our item object.
//     increaseTimesShown() {
//         if ( randomItemId === )
//     }
// 
}