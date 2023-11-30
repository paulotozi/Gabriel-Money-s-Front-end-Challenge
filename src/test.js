//mport axios from "axios";

// const url = "https://dummyjson.com/products?limit=20" 
// const url_json = axios.get(url)

// console.log(url_json.json())

// fetch('https://dummyjson.com/products?limit=20')
// .then(res => res.json())
// .then(console.log);

const response = await fetch('https://dummyjson.com/products?limit=20');

const json = await response.json();

console.log(JSON.stringify(json));