

const ourFetch = (url) => {
    
    let promise = new Promise((resolve, reject)=>{

        let xhr = new XMLHttpRequest();

        xhr.open('GET', url)  //GET, url

        xhr.send()


        xhr.onreadystatechange = ()=>{  //event listener

            if(xhr.readyState == 4  && xhr.status == 200){
                let data = JSON.parse(xhr.responseText)
                //console.log(data);
                resolve(data)
            }
            else if(xhr.readyState === 4 && xhr.status !== 200) {

                // console.log(xhr.readyState);
                reject('error in data')
            }
        }
    })

    return promise;
}

window.ourFetch = ourFetch


// fetch(url).then 

// ourFecth(url).then()



