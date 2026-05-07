const lunches = [];
function addLunchToEnd(arr, str) {
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`)
    return arr;
}
function addLunchToStart(lunchMenu, lunchItem) {
    lunchMenu.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return lunchMenu;
}
function removeLastLunch(lunchMenu) {
    if (lunchMenu.length === 0) {
        console.log("No lunches to remove.");
        return lunchMenu;
    } else {
        const removedItem = lunchMenu.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
        return lunchMenu;
    }
}
function removeFirstLunch(lunchMenu) {
    if (lunchMenu.length === 0) {
        console.log("No lunches to remove.");
        return lunchMenu;
    } else {
        const removedLunch = lunchMenu.shift();
        console.log(`${removedLunch} removed from the start of the lunch menu.`);
        return lunchMenu;
    }
}
function getRandomLunch(randomLunch) {
    if (randomLunch.length === 0) {
        console.log("No lunches available.");
        return randomLunch;
    } else {
        const selectRandomLunch = Math.floor(Math.random() * randomLunch.length);
        const randomIndex = randomLunch[selectRandomLunch];
        console.log(`Randomly selected lunch: ${randomIndex}`);
        return randomLunch;
    }
}
function showLunchMenu(lunchMenu) {
    if (lunchMenu.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${lunchMenu.join(', ')}`);
    }
}
// Test your functions here
addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Salad");
console.log(lunches);
showLunchMenu(lunches);
removeLastLunch(lunches);
console.log(lunches);

console.log("JS is working!");