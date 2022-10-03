const arr = [
    {name: "Jannat",price: 200,},
    {name: "Janat",price: 300,},
    {name: "Jannat",price: 400,},
    {name: "Jaat",price: 500,},
    {name: "Jannt",price: 600,},
    {name: "Janna",price: 700,},
    {name: "Jnnat",price: 500,},
    
];

const value = arr.find(x => x?.price === 500);

console.log(value);
