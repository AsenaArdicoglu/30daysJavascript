let user1 ={
    name: 'Asena',
    surname: 'Ardic',
    age: 24,
}

let user2 ={
    name: 'Asena',
    surname: 'Ardic',
    age: 24,
}
console.log(user1 == user2);

namee = "Asena"
surnamee="Ardic"
fullName =namee +" "+ surnamee;
console.log(fullName);

let paragraph = "asena\nzeynep\nardic"
console.log(paragraph);


let a = 3
let b = 2
console.log(a + b);
console.log(a+"+"+b+"="+(a + b));

let string = 'asena';
console.log(string.toUpperCase() +" "+"eski hali="+" "+ string);
console.log(string.length +" "+string);

let isDelete = confirm("Are you sure you want to delete this item?");
console.log(
    isDelete ? 'Yes you delete this item' : 'No you didn\'t delete this item'
); //confirm işlemi emin misin diye çok kullanılıyor

const date = new Date()
console.log(date);
console.log(date.getMonth() + ' ' + date.getFullYear());;


//let isRaining = true;
let weather = prompt("Is the weather raining?", " answer : yes or no");
if (weather == "yes"){
    console.log("take an umbrella");
}else{
    console.log("keep going on");
} // placeholder tarzında promptta raining soruldu

let names = ['Asena', 'Zeynep','Asena1', 'Osan'];
console.log(names.indexOf('Zeynep'));
console.log(names.lastIndexOf('Asena')); // son indeksi alır istenilen verinin
console.log(names.includes('Asena')); // eğer içeriyorsa true değeri içermiyorsa false değeri döner 
//eeğer o varsa o değerin indeksini alıyor yoksa -1 değerini alıyor

console.log('asena'.split('').reverse().join(''));

const nums = [5, 8, 6, 4, 2]
console.log(nums.sort());

for (let i =1; i <=5; i++) {
    console.log(`${i}* ${i}= ${i * i}`);
}

const name = ['Asena', 'Zeynep', 'Osan', 'Özlem', 'Fatih', 'Asena2', 'Asena3', 'Asena4']
for (let i = 0; i <name.length; i++) {
    console.log(name[i]);
}

let numbers = [5, 10, 15, 20, 30, 40, 50]
let sum = 0

for (let i =0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log('sum: ' + sum);

let countries = ['Turkey', 'Scotland', 'Iceland', 'Canada', 'Sweden']
let newCountries = []

for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i]);
}
console.log(newCountries);

for (let name of names) {
    if (name === 'Asena1') {
        console.log(`${name} es geçildi`);
        continue
    }
}

 function multiply (num1, num2) {
    return (num1 * num2)
    total =0;
}
let total = multiply(7,27)
console.log('toplam', total);

function topla() {
    let total = 0;
    for (let i = 0; i <arguments.length; i++) {
        total+=arguments[i]
    }
    return total;
}
console.log('toplanan sayi= '+topla(2, 3, 5, 9));