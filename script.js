const inventory = [];

// Functions
function findProductIndex(name) {
  const nameLower = name.toLowerCase();
  return inventory.findIndex((obj) => obj['name'] === nameLower);
}

function addProduct(obj) {
	const productIndex = findProductIndex(obj['name']);
	const productNameLower = obj['name'].toLowerCase();
	obj['name'] = productNameLower;
	if (productIndex === -1) {
		inventory.push(obj);
		console.log(`${productNameLower} added to inventory`);
	} else {
		inventory[productIndex]['quantity'] = inventory[productIndex]['quantity'] + obj['quantity'];
		console.log(`${productNameLower} quantity updated`);
	}
}

function removeProduct(name, quantity) {
	const nameLower = name.toLowerCase();
	let obj = {name: nameLower, quantity: quantity};
	const productIndex = findProductIndex(obj['name']);
	if (productIndex === -1) {
	console.log(`${nameLower} not found`);
	} else if (productIndex !== -1 && inventory[productIndex]['quantity'] > quantity) {
		inventory[productIndex]['quantity'] = inventory[productIndex]['quantity'] - obj['quantity'];
		console.log(`Remaining ${nameLower} pieces: ${inventory[productIndex]['quantity']}`);
		
	} else if (productIndex !== -1 && inventory[productIndex]['quantity'] == quantity) {
		inventory.splice(productIndex, 1);
		
	} else if (productIndex !== -1 && inventory[productIndex]['quantity'] < quantity) {
		console.log(`Not enough ${nameLower} available, remaining pieces: ${inventory[productIndex]['quantity']}`)
	}

}

console.log(findProductIndex("flour"));
removeProduct("FLOUR", 5);
addProduct({name: "FLOUR", quantity: 5});
console.log(inventory);
console.log(findProductIndex("FLOUR"));
addProduct({name: "FLOUR", quantity: 5});
console.log(inventory);
removeProduct("FLOUR", 25);
removeProduct("flour", 5);
console.log(inventory);
removeProduct("flour", 5);
console.log(inventory);
