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
duplicateEncode("din")
duplicateEncode("recede")
duplicateEncode("Success")
duplicateEncode("(( @")