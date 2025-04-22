let items = [
  { name: "shirt", price: 1200, category: "essential" },
  { name: "rice", price: 500, category: "essential" },
  { name: "vegetable", price: 300, category: "non-essential" },
  { name: "makeup set", price: 850, category: "non-essential" },
];
let budget = 700;

function canBuy(item, budget) {
  if (item.price <= budget) {
    return `you can afford ${item.name}`;
  } else {
    if (item.category === "essential") {
      return `you cannot afford ${item.name}.maybe skip a non essential item`;
    } else {
      return `you cannot afford ${item.name}`;
    }
  }
}

console.log(canBuy(items[0], budget));
console.log(canBuy(items[1], budget));
console.log(canBuy(items[2], budget));
console.log(canBuy(items[3], budget));



