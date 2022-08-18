

class Stack {

    constructor() {
        this.arr = []
    }

    peek = () => {
        if(this.arr.length > 0){
            return this.arr[this.arr.length - 1]
        }

        return null
    }

    push = () => {

        this.arr.push(val)
    }

    pop = () => {
        this.arr.pop()
    }

    length = () => {
        
        return this.arr.length;
    }

}

module.exports = Stack