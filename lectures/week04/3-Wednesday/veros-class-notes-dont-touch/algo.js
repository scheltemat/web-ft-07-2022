

//     {{}{[()]}}
//       

//     {()}{
//         |


// [       ]
// (, )
// {, }

// [1, 2, 3, 4] LIFO


class Stack {

    // __init__()
    // self.array =[] 

    constructor(){
        this.array = []
    }

    push(val){
        this.array.push(val)
    }

    pop(){

        let removedElement = this.array.pop()
        return removedElement
    }
}

// let stack = new Stack()

function balanced_brackets(codeString){

    if(!codeString.length){
        return true
    }

    // let stack = []
    let stack = new Stack()

    let opening = {
        "(" : true, 
        "{" : true, 
        "[" : true
    }

    let closing = {
        ")": "(", 
        "}": "{", 
        "]" : "["
    }

    for(let i = 0; i< codeString.length; i++){
//     {()}
//       |
        let char = codeString[i]  // { 

        if(opening[char]){  //opening["{"]
            stack.push(char)  //[{, ]
        }

        if(char in closing){ // closign["("]
            let lastChar = stack.pop()  //"("

            if(lastChar !== closing[char]){
                return false
            }
        }

    }

    if(stack.length === 0){
        return true
    }
    else{
        return false
    }
}


let result =  balanced_brackets("{()}{")
console.log(result);
