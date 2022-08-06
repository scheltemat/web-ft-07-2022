let row1 = document.createElement('div')
let body = document.querySelector('body')
const getChars = async () => {
    let charArr = [];
    let pageIndex = 1;
    let resultsArr = [];
    row1.setAttribute('class', 'row')

    do{
        let chars = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${pageIndex}&pageSize=50`)
        resultsArr = await chars.json();
        
        charArr = [...charArr, ...resultsArr];
        pageIndex ++;
    }  
    while(resultsArr.length>0){
        console.log(charArr);
        // charArr.forEach(character =>{
        //         if(character.allegiances.length > 0){
        //                 fetch(character.allegiances[0])
        //                 .then(result => result.json())
        //                 .then(houseData ={
        //                     row1.innerHTML += `<div class="col-5 char">
        //                         <div>name:${character.name}</div><div>Alias:${character.aliases}</div><div>House:${house}</div>
        //                     </div>`
        //                 })
                        
        //             }
        //             else{
        //                 row1.innerHTML += `<div>name:${character.name}</div><div>Alias:${character.aliases}</div><div>House:</div>`}
        //             })

    }//end of if statement

    for(let i = 0; i< charArr.length; i++){
            if(charArr[i].allegiances.length > 0){
            let houseNames = await getHouse(charArr[i].allegiances)

            console.log(houseNames.name);
        }
    }
    
    // await charArr.forEach(el => {
    //     if(el.allegiances.length > 0){
    //         let houseNames = getHouse(el.allegiances)

    //         console.log(houseNames);
    //     }
        
    // });
                
}// end of function 
// body.append(row)

const getHouse = async (arr) => {
    
    let house = await fetch(arr[0])
    let data = await house.json()

    // console.log('here');
        // let houses = await fetch(url)
        // data = await houses.json();

        
        // console.log(data.name);
        // return data.name
   return data
}
getChars()
// body.append(row1)