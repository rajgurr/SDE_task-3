let holdCabinet1=['duct','gum',3.14.false,6.022e23]
let holdCabinet2=['orange drink','nerf toys','camera',42,'parship'];
let concarr=holdCabinet1.concat(holdCabinet2);
console.log(concarr);
let slarr = holdCabinet1.slice(0,2).concat(holdCabinet2.slice(0,2));
console.log(slarr);
console.log('Reversed array: '+holdCabinet1.reverse());
console.log('Sorted array: '+holdCabinet2.sort());
