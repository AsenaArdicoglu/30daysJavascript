const user1 ={
    name: 'zeynep ',
    surname: 'Ardic',
    age: 24,
    isMarried: false,
    getFullName: function() {
        return this.name + ' ' + this.surname
    }
}
//let keyName = 'age'
console.log(user1.getFullName());

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

//n normal function
function hello(name){
    return `hello ${name}`;
}
console.log(hello(name));

// arrow function
const hello2 = names => `hello ${names}`
console.log(hello2(names)); 

let isim = 'Fatih'
let surname = 'Ardic'

function letsLearnScope() {
    console.log(isim, surname);
    if(true) {
        let isim = 'asena'
        let surname = 'ardicc'
        console.log(isim, surname);
    } 
    console.log(isim, surname);
}
letsLearnScope();
console.log(isim, surname);


let number = Number(prompt("enter number: "))
let func = number => number ** 2

function cube(cb, number) {
    return cb(number) * number
}

console.log("girilen sayi: " + `${number}` +' ' + "küpü: " +cube(func, number));

const d = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
        return b
}
console.log(d(5) (10) (20));

//foreach metodu bir fonksiyon alır
const numb = [1, 2, 6, 7, 10]
console.log(
    numb.reduce((oldValue,currentValue) => oldValue + currentValue, 0))
//reduce ile yaptim değerleri verip total sayıısı olarak da 0 verdim sona
// diziyi tek birdeğere indirgemek için kullanılır

// let totall = 0
// numb.forEach(numb => totall += numb)
// console.log("total: " + totall);

const numbers2 = numb.map(numb =>numb * 2)
console.log("sayilar: " + numb + "\n" + "sayilarin 2 ile carpimi: " +numbers2); // map ile yapildi

console.log(
    numb.filter(numb => numb > 3 && numb < 10)
); //filter ile filtreleme

//map ile örnek
let userNames =[
    {
        id : 1,
        name : "Asena",
        age :24,
        gender: "Female",
    },
    {
        id : 2,
        name : "Zeynep",
        age :24,
        gender: "Female",
    },
    {
        id : 3,
        name : "Fatih",
        age :23,
        gender: "Male",
    },
]
// every methodu
console.log(
    userNames.every(user => user.gender === "Female")
);

//some methods içinndeki koşuldan biri doğrıysa true dondurur
console.log(
    userNames.some(user => user.gender === "Female")
);




userNames = userNames.map(userNames => {
    if (userNames.id === 2) {
       userNames = "Medine"
    } return userNames
}) 
console.log(userNames);

// setinterval tekrrarlanan ms şeklinde oluyır bu da 1000 veya 2000 gibi gösterilmesi lazım 
// setTimeout tek seferlik kullancam gelefcekte kullanılcak 
function sayHello() {
    console.log("hello");
} 
//setTimeout(sayHello, 5000);

// clearInterval ve clearsetTimeout bunları siler

const interval = setInterval(sayHello, 1000);
setTimeout(() => {
    clearInterval(interval);
    console.log("interval cleaned");
}, 3000)

const timeout = setTimeout(() => {
    clearTimeout(timeout);
    console.log("timeout cleaned");
}, 3000)


//sort sıralama yapar string ifade içimn
const namess =["h", "v", "a", "g"]
namess.sort()
console.log("string i küçükten büyüğe sıralama: " + namess);
namess.sort((a, b) => a.localeCompare(b)); // büyükten küçüğe için ise tam tersi 
console.log("locale Compare ile sıralama: " + namess);

// sort numbers için
const num =[3, 5, 77, 33, 7]
num.sort( (a, b) =>  a - b ) // büyüktrn küçüğe için de "b-a" 
console.log("küçükten büyüğe sıralama: " + num );


//10.day tutorial javascript
//  using set parameters
const surName = new Set(['ardic', 'akkaya', 'akpiyal'])
for (let surname of surName) {
    console.log('soyad : ', surname)
};

const ad = new Set()
ad.add('asena')
ad.add('zeynep')
ad.add('osan')
ad.add('özlem')
ad.add('bekir')

console.log(ad);
// for delete 
ad.delete('zeynep')
console.log(ad);

// has 
console.log(
    ad.has('osan' ), 
);
console.log(
    ad.has('fatih')
);

//union of set
let e = [1, 2, 3, 4, 5, 6]
let f =  [5, 6, 7, 8, 9]
let g = [...e, ...f]
console.log(new Set (g));

// intersection of set
let m = [1, 2, 3, 4, 5, 6]
let n =  [5, 6, 7, 8, 9]

const N = new Set (n)
console.log(
    m.filter(num => N.has(num))
);

//different of set
let x = [1, 2, 3, 4, 5, 6]
let y =  [5, 6, 7, 8, 9]

const X = new Set (x)
const Y = new Set (y)

console.log( 
    "x: " + x
    +"\n" +" 'x 'te olup y de olmayan: "    + 
    x.filter( (num) => !Y.has(num) )
);
console.log(
    "y: " + y 
    + "\n" + " 'y' de olup x te olmayan: " +
    y.filter((num) => !X.has(num))
);

// day 11 destructing and spread
// diziden çıkarıp başka değişkene atama

const numara = [1, 2, 3, 4]

 const stack = [
    ['HTML', 'CSS', 'JAVASCRIPT'],
    ['PHP', 'MYSQL', 'NODEJS']
 ]
 //const [frontend, backend] = stack
 const [[firstTech, seconddTech], [secondTech]] = stack

//console.log(frontend);
//console.log(backend);
console.log(seconddTech, secondTech); 

// undifined değere atama yapma
const numaralar =[6, undefined, 0]
const [, numara2 = 4, numara3 ] = numaralar
console.log(numara2);


//geri kalanı dizi haline getirmesi için REST kullanıyoruz
const numaraM = [4, 6, 7, 2, 74, 4, 7, 9,]
let [numaraM1, numaraM2, numaraM3, ...otherNum] = numaraM 
console.log(numaraM1, numaraM2, numaraM3);
console.log('rest geri kalanı gösterir: ' + otherNum);

const numberss = [1, 2, 3]
const numberTwo =[ ... numbers]

console.log(numberss);
numberTwo.push(33)

console.log(numberss);
console.log(numberTwo);

// day 12
//regExp regular expression bilinmeyeni bulma 
//g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

let pattern = 'love'
let flag = 'gi'
let regEx = RegExp(pattern, flag)

// bu şekilde de yazılır

let word = /love/gi
let comment = ' If  you love me, satisfy me'
console.log(
    //word.test(comment)
    //comment.match(/me/ig)
    comment.search(/me/ig)
); // eğer içinde o kelimem varsa true, yoksa false doner

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/python/gi, 'JavaScript')
console.log(matchReplaced)

const text = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = text.replace(/%/g, '')
console.log(matches)  

// REGEX PROPERTIES
// []: A set of characters
// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
// \: uses to escape special characters
// \d mean: match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits
// . : any character except new line character(\n)
// ^: starts with
// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.
// $: ends with
// r'substring$' eg r'love$', sentence ends with a word love
// *: zero or more times
// r'[a]*' means a optional or it can occur many times.
// +: one or more times
// r'[a]+' means at least once or more times
// \?: zero or one times opsiyoneldir
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending of a word
// {3}: Exactly 3 characters
// {3,}: At least 3 characters
// {3,8}: 3 to 8 characters
// |: Either or
// r'apple|banana' mean either of an apple or a banana
// (): Capture and group

//EXAMPLES
let str = "I am Asena , I am 24. I was born in 1999"
console.log(str.match(/\d+/g)); //sayilari alma
console.log(str.match(/\D+/g)); //kelimeeleri alma
console.log(str.match(/\b\d{2}\b/g)); // boundry ile sınırlandırma

let firstName = "Kaleo"
console.log(
    /a?o$/.test(firstName) // a optional $ not optional => compulsory
);

//negation  pattern kısmında neyi istemediğini yazıyorsun 
// asağıdaki örnekte harfleri (A-Z, a-z) noktalama isaretllerini (.)  ve bosluğu almak ( ) istemdiğini söylemiş bu yüzdem sadece sayıları almış
const txtt = 'This regular expression example was made in December 6,  2019.'
const patternn = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matche = txtt.match(patternn)
console.log(matche)  // ["6", "2019"]

// Exact match
// It should have ^ starting and $ which is an end.
// kesinlik bildirir 

let patteern = /^[A-Z][a-z]{3,12}$/;
let myName = 'Asena';
let result = patteern.test(myName)

console.log(result) // true

//examples
function is_valid_variable(string) {
    console.log(
        /^[a-z_]+$/i.test(string)
    );
}
// is_valid_variable('first_name')  //True
// is_valid_variable('first-name')  //False
// is_valid_variable('1first_name') //False
// is_valid_variable('firstname')   //True

//groups

let dates = "2023.08.15";
console.log(
    dates.match(/(?<year>\d{4})\.(?<month>\d{2})\.(?<day>\d{2})/)
)
   

// regex pattern
const todayDate = "18.08.2023";
console.log(
    todayDate.match(/(?<day>\d{2})\.(?<month>\d{2})\.(?<year>\d{4})/)
);

console.log(
    "%cSTOP!", "font-size:50px; color:red; font-weight:bold"
    );

    console.warn("Don't forget!");
    console.error("You have been warned about this event");

    const myTable = ["date", "name", "surname", "age"]
    console.table(myTable);
// regex pattern

// try catch throw
try{
    let firstName = "asena"
    let lastName =  "ardic"
    fullNames = firstName + " " + soyad
    throw new Error("error please try again")
}catch(e){
    console.log(e.name); // error yazimi "e", "err", "error" optional
    console.table(e) // reference error verir
}

// try catch throw
let age = Number(prompt("Please enter your age"))
try {
    if(age > 29) 
    throw new Error(" please enter a valid age")
    else if(age <29) 
    console.log("your age is " + age);

} catch (error) {
    alert("you enter wrong number of your age") 
}

//class 
class Person {
    constructor(
      firstName = 'Asena',
      lastName = 'Ardic',
      age = 24,
      country = 'Turkey',
      city = 'Ankara'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person() // it will take the default values
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1)
  console.log(person2)

  // json format 
  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Express',
        'MongoDB',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txts = JSON.stringify(users, undefined, 4)
  console.log(txts) // text means JSON- because json is a string form of an object.
  

// day 17 web storage
localStorage.setItem('Asena' ,'Ardic')
localStorage.setItem('session' ,'storage')
console.log(
    localStorage.getItem('name')
);

// local storage example

const basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [
    {
        id: 1,
        title : 'Macbook Pro 2021',
        price: 45_000
    },
    {
        id: 2,
        title : 'Lenova ',
        price: 35_000
    },
    {
        id: 3,
        title : 'Casper',
        price: 15_000
    }
];

function addBasket (productId) {
    basket.push(productId);
    localStorage.setItem('basket', JSON.stringify(basket));
}

addBasket(2)
addBasket(3)

console.log(basket);

//test callbacks function
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success ")
    },1500)
    resolve("success ")
    reject("failure ")
});

promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.warn(err)
});