console.log('inventory.js sourced');
// global inventory
var inventory = [];

var addItem = function(color, name, size) {
    console.log('adding item: ' + name + ' ' + color + ' ' + size);
    // create object
    var newItem = {
        color: color,
        name: name,
        size: size
    }; // end newItem
    // push into array
    inventory.push(newItem);
    // Give the user confirmation

    // show updated inventory
    console.log('currentInventory:', inventory);
}; // end addItem

var addUserItem = function() {
    // Adds an item to the inventory array from user's inputs
    var newName = document.getElementById("nameInNew").value;
    var newColor = document.getElementById("colorInNew").value;
    var newSize = document.getElementById("sizeInNew").value;
    addItem(newColor, newName, newSize);
    alert("Successfully added a " + newSize + " " + newColor + " " + newName);
};

var searchInventory = function() {
    console.log('in searchInventory');
    // get size from user
    var selectedSize = document.getElementById('sizeIn').value;
    // get color from user
    var selectedColor = document.getElementById('colorIn').value;
    console.log('looking for something ' + selectedColor + ' and ' + selectedSize);
    // check if an item fits this description
    // loop through the inventory array and see if any item matches
    // array for our results
    var results = [];
    for (var i = 0; i < inventory.length; i++) {
        // does this item match my description?
        if (inventory[i].color == selectedColor && inventory[i].size == selectedSize) {
            results.push(inventory[i]);
        }
    } // end for
    console.log(results.length + ' matches found');
    console.log(results);
    return results;
}; // end searchInventory

var searchInventoryByName = function() {
    // Searches the inventory for objects that match by name only
    var results = [];
    var name = document.getElementById("nameIn").value;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
            results.push(inventory[i]);
        }
    }
    return results;
};

var showSearchResults = function() {
    var results = searchInventoryByName();
    if (results.length === 0) {
        results = searchInventory();
    }
    var resultsList = document.getElementById('resultsList');
    // If there are results in the list
    if (results.length > 0) {
        var htmlString = "";
        // Create a list item for each item in the results
        for (var i = 0; i < results.length; i++) {
            htmlString += "<li>" + results[i].name + "</li>";
        }
        // Add the entire list onto the DOM
        resultsList.innerHTML = htmlString;
    } else {
        // No results found
        resultsList.innerHTML = "Found no matches";
    }
};

///////// ADD ITEMS /////////
addItem('blue', 'Smurf', 'small');
addItem('mermaid treasure', 'Prime Academy', 'large');
addItem('purple', 'Prince', 'medium');
