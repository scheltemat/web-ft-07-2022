

// balance brackets as such 
// [{()}]


function balancedBrackets(str){

    let stack = []
    
    for(let i = 0; i < str.length; i++){

        let x = str[i]

        if (x == '(' || x == '[' || x == '{'){
            stack.push(str[i]);
            continue;
        }

        if (stack.length == 0){
            return false;
        }

        let check;
        switch(x){
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;
            case ']':
                check = stack.pop();
                if (check == '{' || check == '(')
                    return false;
                break;
            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;
        }
    }
    return(stack.length == 0)
}

let str = "{}";

if (balancedBrackets(str)){
    console.log("Balanced");
}
else{
    console.log("Not balanced");
}