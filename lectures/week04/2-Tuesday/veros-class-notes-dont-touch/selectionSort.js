

// smallestNum = 10 (index)
//[34, 22, 10, 19, 17]
//                 |

// smallestNum = 17 (index=1)
// [10, 22, 34, 19, 17]
//                   |

// smallestNum = 17 (index=1)
// [10, 17, 34, 19, 22]
//           |


function selectionSort(arr){

    for(let i = 0; i< arr.length; i++){
        let smallest = i; 

        for(let j = i + 1; j<arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j
            }
        }

        if(i !== smallest){

            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; 
        }
    }

    return arr;
}

let sortedArr = selectionSort([34, 22, 10, 19, 17])
console.log(sortedArr)