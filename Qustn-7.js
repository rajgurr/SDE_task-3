let people=['Greg','Mary','Devon','James'];
for(let i=0;i<people.length;i++){
  console.log(people[i]);
}
people.splice(0,1);
console.log(people);
people.pop();
console.log(people);
people.unshift('Matt');
console.log(people);
people.push("Rajguru S");
console.log(people);

for(let j=0;j<people.length;j++){
  console.log(people[j]);
  if(people[j]=='Mary'){
    break;
  }
}

let ar2=people.slice(2);
console.log(ar2);
let people1=['Greg','Mary','Devon','James'];

let pos=people1.indexOf('Mary');
console.log(pos);
let pos1=people1.indexOf('Foo');
console.log(pos1);
people1.splice(2,1,'Elizabeth','Artie');
console.log(people1);


