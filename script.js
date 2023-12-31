'use strict'


function XO(str) {
    let x = 0
    let o = 0
    
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === 'x'){
           x++
        }
        if(str[i].toLowerCase() === 'o'){
           o++
        }
    }

    return(x == o)
}

// XO('xo')
// XO("xxOo")
// XO("xxxm")
// XO("Oo")
// XO("ooom")


function filter_list(l) {
    return l.filter((item)=>{
       if(typeof(item) === 'number'){
        return true
       }
    })
  }

// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))


const areaOrPerimeter = function(l , w) {
    if(l === w){
        return l * w
    } else {
        return((l * 2) + (w * 2))
    }
  };
// areaOrPerimeter(3,  3)
// areaOrPerimeter(6, 10)


function switchItUp(number){
    switch(number){
        case 1:
            return 'One'
        case 2:
            return 'Two'
        case 3:
            return 'Three'
        case 4:
            return 'Four'
        case 5:
            return 'Five'
        case 6:
            return 'Six'
        case 7:
            return 'Seven'
        case 8:
            return 'Eight'
        case 9:
            return 'Nine'
        case 0:
            return 'Zero'
    }
    }
// switchItUp(1)
// switchItUp(3)
// switchItUp(5)


function invert(array) {
    let newArr = array.map(item => {
       return item > 0 ? item = - item : 
        item < 0 ? item = item - (item * 2) : -0
    })

    return newArr
 }
// console.log(invert([1,2,3,4,5]))
// console.log(invert([1,-2,3,-4,5]))
// invert([])
// invert([0])

function DNAtoRNA(dna) {
    let rna = ''
    for(let i = 0; i < dna.length; i++){
        if(dna[i] === 'T'){
            rna += 'U'
        } else {
            rna += dna[i]
        }
    }
    return rna
  }
// console.log(DNAtoRNA("TTTT"))
// console.log(DNAtoRNA("GCAT"))
// console.log(DNAtoRNA("GACCGCCGCC"))

function checkForFactor (base, factor) {
    return base % factor === 0
  }
// checkForFactor(10,2)
// checkForFactor(63,7)
// checkForFactor(2450,5)
// checkForFactor(24612,3)


function evenOrOdd(number) {
  return number % 2 == 0 ? 'Even' : 'Odd'
}
// evenOrOdd(2)
// evenOrOdd(7)
// evenOrOdd(-42)

// function toCamelCase(str){
//     let arrWords = ''
//     if(str.indexOf('_')){
//        arrWords = str.split('_')
//     }
//     if(str.indexOf('-')){
//        arrWords = str.split('-')
//     }
//     arrWords.reduse((acc, item, index)=> {
//         acc += item
//         console.log(acc);
//     },'')  
    
    
// }
// toCamelCase('')
// toCamelCase("the_stealth_warrior")
// toCamelCase("The-Stealth-Warrior")
// toCamelCase("A-B-C")


function findOdd(arr) {
    const obj = {}

    for(let i = 0; i < arr.length; i++){
        if(arr[i] in obj){
            ++obj[arr[i]]
        } else {
            obj[arr[i]] = 1 
        }
    }

    for(let num in obj){
        if(obj[num] % 2  !== 0){
            return num      
        }
    }
}
// findOdd([7])
// findOdd([0])
// findOdd([1,1,2])
// findOdd([0,1,0,1,0])
// findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])



function findOutlier(integers){
    let even = integers.filter((item) => item % 2 === 0)
    let odd = integers.filter((item) => item % 2 !== 0)

    return even.length > odd.length ? odd[0] : even[0]
}
// findOutlier([0, 1, 2])
// findOutlier([1, 2, 3])
// findOutlier([2,6,8,10,3])
// findOutlier([0,0,3,0,0])
// findOutlier([1,1,0,1,1])

function solution(string) {
    let newStr = ''
    let arr = [0]

    for(let i = 0; i < string.length; i++){
        if(string[i] != string[i].toLowerCase()){
            arr.push(i)
        }
    }

    for(let i = 0; i < arr.length; i++){
        newStr += string.slice(arr[i], arr[i + 1]) + ' '
    }

    return newStr.trim()
}
// console.log(solution('camelCasing'))
// console.log(solution('camelCasingTest'))


function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function (val, ingredient) {
        return Math.min(
          Math.floor(available[ingredient] / recipe[ingredient] || 0),
          val
        )
      }, Infinity)
}
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});


function digitalRoot(n) {
    let result = 0;
    String(n).split('').map(num => {
      result += Number(num);
    });
    return result > 10 ? digitalRoot(result) : result;
  }

// console.log(digitalRoot(16))
// console.log(digitalRoot(456))


function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() === "r"){
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}
// console.log(areYouPlayingBanjo("Adam"))
// console.log(areYouPlayingBanjo("Paul"))
// console.log(areYouPlayingBanjo("Ringo"))
// console.log(areYouPlayingBanjo("bravo"))
// console.log(areYouPlayingBanjo("rolf"))


function removeSmallest(numbers) {
   const copy = numbers.slice(0)
   let smallestValue = numbers.indexOf(Math.min(...numbers))
   copy.splice(smallestValue, 1);
   return copy
}
// removeSmallest([1, 2, 3, 4, 5])
// removeSmallest([5, 3, 2, 1, 4])
// removeSmallest([2, 2, 1, 2, 1])
// removeSmallest([])


function grow(x){
   return x.reduce((acc, num, index) => {
        if(index === 0){
            acc += num
        }
        return acc * num
    })
}
// console.log(grow([1, 2, 3]))
// console.log(grow([4, 1, 1, 1, 4]))
// console.log(grow([2, 2, 2, 2, 2, 2]))


function countSmileys(arr) {
    const smileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D'];
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < smileys.length; j++) {
        if (arr[i] === smileys[j]) {
          count++;
        }
      }
    }
    return count;
}
// countSmileys([])
// countSmileys([':D',':~)',';~D',':)'])
// countSmileys([':)',':(',':D',':O',':;'])
// countSmileys([';]', ':[', ';*', ':$', ';-D'])

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
// findUniq([ 1, 0, 0 ])
// findUniq([ 0, 1, 0 ])
// findUniq([ 0, 0, 1 ])
// findUniq([ 1, 1, 1, 2, 1, 1 ])
// findUniq([ 1, 1, 2, 1, 1 ])
// findUniq([ 3, 10, 3, 3, 3 ])



function duplicateEncode(word){
    let letterCount = {};
    let letters = word.toLowerCase().split('');
  
    letters.forEach(function(letter) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    });
  
    return letters.map(function(letter) {
      return letterCount[letter] === 1 ? '(' : ')';
    }).join('');
}
// duplicateEncode("din")
// duplicateEncode("recede")
// duplicateEncode("Success")
// duplicateEncode("(( @")


function DNAStrand(dna){
    let sequence = {
     "A": "T",
     "T": "A",
     "G": "C",
     "C": "G"
   }
   return dna.replace(/A|T|G|C/g, function(matched){
     return sequence[matched];
   });
 }
//  DNAStrand("AAAA")
//  DNAStrand("ATTGC")
//  DNAStrand("GTAT")

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}
let sif = new SmallestIntegerFinder()
// console.log(sif.findSmallestInt([78,56,232,12,8]))
// console.log(sif.findSmallestInt([78,56,232,12,18]))
// console.log(sif.findSmallestInt([78,56,232,412,228]))
// console.log(sif.findSmallestInt([78,56,232,12,0]))
// console.log(sif.findSmallestInt([1,56,232,12,8]))


function findShort(s){
  let length = 500
  const arr= s.split(' ')
  arr.forEach(item => {
    if(item.length < length){
        length = item.length
    }
  })

  return length
}
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// console.log(findShort("turns out random test cases are easier than writing out basic ones"))
// console.log(findShort("Let's travel abroad shall we"))


const doubleInteger = (i) => i * 2

// doubleInteger(2)



function removeChar(str){
   return str = str.slice(1, str.length - 1)
};
// removeChar('eloquent')
// removeChar('country')
// removeChar('person')
// removeChar('place')
// removeChar('ooopsss')   

function check(a, x) {
   return a.includes(x)
}
// console.log(check([66, 101], 66))
// console.log(check([101, 45, 75, 105, 99, 107], 107))
// console.log(check(['t', 'e', 's', 't'], 'e'))
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))

function oddOrEven(array) {
    let sum = array.reduce((acc, value) => acc + value, 0)
    if(sum % 2 === 0){
        return 'even'
    } else {
        return 'odd'
    }
}
// oddOrEven([0])
// oddOrEven([1])
// oddOrEven([])
// oddOrEven([0, 1, 5])
// oddOrEven([0, 1, 3])
// oddOrEven([1023, 1, 2])
// oddOrEven([0, -1, -5])
// oddOrEven([0, -1, -3])
// oddOrEven([-1023, 1, -2])
// oddOrEven([0, 1, 2])
// oddOrEven([0, 1, 4])
// oddOrEven([1023, 1, 3])
// oddOrEven([0, -1, 2])
// oddOrEven([0, 1, -4])
// oddOrEven([-1023, -1, 3])


String.prototype.toJadenCase = function () {
    let arr = this.split(' ')
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
    } 
    let result = arr.join(' ')
    return(result);
}
var str = "How can mirrors be real if our eyes aren't real"
// str.toJadenCase()


function basicOp(operation, value1, value2){
    let result
     switch(operation){
        case'-':
        result = value1 - value2
        break
        case'+':
        result = value1 + value2
        break
        case'*':
        result = value1 * value2
        break
        case'/':
        result = value1 / value2
        break
    }
    return result
}
// basicOp('+', 4, 7)
// basicOp('-', 15, 18)
// basicOp('*', 5, 5)
// basicOp('/', 49, 7)


class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
}
// Kata.getVolumeOfCuboid(1,2,2)
// Kata.getVolumeOfCuboid(6,2,5)


function squareSum(numbers){
    return numbers.reduce((acc, num)=> acc += Math.pow(num, 2), 0)
}
// squareSum([1,2])
// squareSum([0, 3, 4, 5])
// squareSum([])


function likes(names) {
    if(names.length === 0){
        return 'no one likes this'
    } else if (names.length === 1){
        return `${names[0]} likes this`
    } else if (names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else{
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}
// likes([])
// likes(['Peter'])
// likes(['Jacob', 'Alex'])
// likes(['Max', 'John', 'Mark'])
// likes(['Alex', 'Jacob', 'Mark', 'Max'])


const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''),2)
    
}
// binaryArrayToNumber([0,0,0,1])
// binaryArrayToNumber([0,0,1,0])
// binaryArrayToNumber([1,1,1,1])
// binaryArrayToNumber([0,1,1,0])


function makeNegative(num) {
    return num > 0 ? num = -num : num === 0 ? 0 : num
}
// makeNegative(42)


function sumTwoSmallestNumbers(numbers) { 
    numbers.sort((a, b)=>{
       return a - b
    })
    return numbers[0] + numbers[1]
}  
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))


function wave(str){
    let result = []
    const strToArr = str.split('')
    
    for(let i = 0; i < strToArr.length; i++){
       if(strToArr[i] === ' '){
        continue
       }
       strToArr[i] = strToArr[i].toUpperCase() 
       let word = strToArr.join('')
       strToArr[i] = strToArr[i].toLowerCase() 
       result.push(word)
    }
    return result
}
// wave("hello")
// wave("codewars")
// wave("")
// wave("two words")
// wave(" gap ")



function count (string) {  
    const temp = string.split('')
    let obj = {}

    for(let i = 0; i < temp.length; i++){
        obj[temp[i]] ? obj[temp[i]] += 1 : obj[temp[i]] = 1
    }
    return obj;
}
// console.log(count("aba"))
// console.log(count(""))


function abbrevName(name){
    return name.split(' ').reduce((acc, val) =>{
        if(acc === ''){
            acc += val[0].toUpperCase() + '.'
        }else {
            acc += val[0].toUpperCase()
        }
        return acc
    },'')
}
// console.log(abbrevName("Sam Harris"))
// abbrevName("Patrick Feenan")
// abbrevName("Evan Cole")
// abbrevName("P Favuzzi")
// abbrevName("David Mendieta")


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return [...arguments].reduce((acc, val) =>acc += val)
}
// goals(0,0,0)
// goals(43, 10, 5)


function doubleChar(str) {
    const arrToStr = str.split('')
    return arrToStr.reduce((acc, val) => {
        return acc += val + val
    }, '')
}
// doubleChar("abcd")
// doubleChar("Adidas")
// doubleChar("1337")
// doubleChar("illuminati")
// doubleChar("123456")
// doubleChar("%^&*(")


function stray(numbers) {
    const sort = numbers.sort((a, b) => a - b)
    return sort[0] === sort[1] ? sort[sort.length - 1] : sort[0]
}
// stray([1, 1, 2])
// stray([1, 2, 1])
// stray([2, 1, 1])


function getCount(str) {
    let result = 0
    for(let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                result += 1
                break;
        
            default:
                break;
        }
    }
    return result
}
// console.log(getCount("abracadabra"))


function correct(string){
    const corrections = {
        "5": "S",
        "0": "O",
        "1": "I",
      };
      return string.replace(/[501]/g, (char) => corrections[char]);
}
// correct("L0ND0N")
// correct("DUBL1N")
// correct("51NGAP0RE")
// correct("BUDAPE5T")
// correct("PAR15")

function isPalindrome(x) {
    x = x.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = x.length - 1;
    for (let i = 0; i < x.length / 2; i++) {
        if (x[i] !== x[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
// isPalindrome("a")
// isPalindrome("aba")
// isPalindrome("Abba")
// isPalindrome("hello")
// isPalindrome("Bob")
// isPalindrome("Madam")
// isPalindrome("AbBa")
// isPalindrome("")


function hero(bullets, dragons){
    return bullets / dragons >= 2 ? true : false
}
// hero(10, 5)
// hero(7, 4)
// hero(4, 5)
// hero(100, 40)
// hero(1500, 751)
// hero(0, 1)



function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let res = numbers[i] + numbers[j];
      if (res == target) return [i, j];
    }
  }
}



function sumStr(a,b) {
    if(a === ''){
        a = 0
    }
    if(b === ''){
        b = 0
    }
  return (+a + +b).toString()
}
// console.log(sumStr("",""))
// console.log(sumStr("34","5"))



function getAge(inputString){
    return parseInt(inputString)
}
// getAge("4 years old")




function testEven(n) {
    if(n % 2 === 0) return true
    else return false
}
// console.log(testEven(0))
// console.log(testEven(0.5))
// console.log(testEven(1))
// console.log(testEven(2))
// console.log(testEven(-4))


function filter_list(l) {
  return l.filter((str) => typeof str != "string" && str >= 0);
}
  

// console.log(filter_list([1,2,'a','b']) )
// console.log(filter_list([1,'a','b',0,15]) )
// console.log(filter_list([1,2,'aasf','1','123',123]) )
// console.log(filter_list([666, 846, 866, "7=e", 184, 785, "", "369", 172, "2I", "s2[", 235]) )




function smash (words) {
    return words.join(" ");
 }

console.log( smash(['hello', 'world', 'this', 'is', 'great']))