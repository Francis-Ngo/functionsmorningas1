//1 Define Mama cat
const cat1 = { name: "mamaCat", breed: "Calico", age: 3 };
console.log(cat1.breed);
console.log(cat1.age);

//2 Define Papa cat
const cat2 = { name: "papaCat", breed: "Egyptian", age: 3 };
console.log(cat2.breed);
console.log(cat2.age);

//3 Define combineCats function
const combineCats = (mama, papa) => {
    console.log("Mama Cat", mama); 
    console.log("Papa Cat", papa); 
};

// Call combineCats function with cat1 and cat2 as arguments
combineCats(cat1, cat2);
console.log(cat1, cat2);

//combineCats({name: "mama", age: 3, breed: "Egyption"} + {name: "papa", age:3, breed:"Calico"} )
console.log(cat1 + cat2)
