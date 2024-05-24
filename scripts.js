// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// forEach basics 
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`) );

// transform to UPPERCASE
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// name length
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// sorting
const sortedProvinces = provinces.slice().sort(); // Slice to avoid mutating the original
console.log(sortedProvinces);

// filter: Cape
const noCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Count of remaining provinces: ${noCapeProvinces.length}`);

// Find: S
const namesWithS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesWithS);

// Creating Object Mapping
const nameProvinceMap = names.reduce((map, name, index) => {
  map[name] = provinces[index];
  return map;
}, {});
console.log(nameProvinceMap);

// advanced exercises 

console.log(
  // logging products
  products.map(p => p.product.length <= 5),

  // filter name lengths
  products.filter(p => p.product.length <= 5),

  // manipulate price
  "Total price:" + products
  .filter(p => p.price && !isNaN(p.price))
  .reduce((sum,p) => sum + Number(p.price),0),

  // combine arrays for product names
  products.reduce((str,p) => str + p.product, ""),

  // find prices that are extreme
  // Use Infinity for empty prices
  "Highest: " + 
    Math.max(...products.map(p => Number(p.price) || -Infinity)) + 
    ". Lowest: " + 
    Math.min(...products.map(p => Number(p.price) || Infinity)), 

  

)