// arguments objects - no longer bound
// const add = function (a,b){
//     console.log(arguments);
//     return a + b;
// };

//const addArrow = (a,b) => console.log(arguments); 

// console.log(add(55, 1, 100));


// this keyword - no longer bound

// const user = {
//     name: 'Maurice',
//     cities: ['Accra', 'Kasoa', 'Tema'],
//     printPlacesLived(){
//        return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// }

// console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,

    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);      
    }
};

console.log(multiplier.multiply());