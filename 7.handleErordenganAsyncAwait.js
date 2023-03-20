const testDelay =(url)=>{

return new Promise((resolve, reject) => {
  
const delay = Math.floor(Math.random()*450)+500
    
    setTimeout(() => {

        if (delay>1000) {
            
            reject('eror massssehh suiii')
      
        }else{

            resolve(`sukses delay ${delay}, url ${url} aktif`)
        }
        
    }, delay);
})

}





async function newTest() {

    try {

        let result = await testDelay('movie.com')
        console.log(result)

    } catch (error) {
        
        console.log('error',error)
    }

}


newTest();