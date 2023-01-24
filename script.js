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


XO('xo')
XO("xxOo")
XO("xxxm")
XO("Oo")
XO("ooom")