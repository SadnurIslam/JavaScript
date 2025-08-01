const winterFlower = ["Snowdrop", "Winter Aconite", "Hellebore"];
const springFlower = ["Daffodil", "Tulip", "Crocus"];
const summerFlower = ["Rose", "Lily", "Sunflower"];

const flowers = winterFlower.concat(springFlower, summerFlower);

// flowers.push(...summerFlower);

console.log(...flowers);
console.log(flowers.splice(3,2));
console.log(flowers.join("\n"));