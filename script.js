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