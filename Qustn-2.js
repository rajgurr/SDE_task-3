let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5]='space ether';
console.log(cargoHold);

console.log(cargoHold.pop()+' is removed');
console.log(cargoHold);

console.log(cargoHold.shift()+' is removed');
console.log(cargoHold);

cargoHold.unshift(1138);
cargoHold.push('20meters');
console.log(cargoHold);

console.log(`the last upadted array is ${cargoHold} its length is ${cargoHold.length}`);
