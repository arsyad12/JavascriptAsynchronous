
// const testPromise =()=>{

// return new Promise((resolve, reject) => {
    
//     resolve(()=>{
//     console.log('promise sukses')
//     });

//     reject(()=>{
//     console.log('error gaes')
//     })

// })

// }


const changeColordelay =(color,delay)=>{

  return  new Promise((resolve, reject) => {

        setTimeout(() => {

            if (delay>3000) {
 
                reject('eror')  

            }else{
            
            document.body.style.backgroundColor = color;
        
        resolve() 
    
    }

     },delay);

    
     
    
    });
}

changeColordelay('red',1000)
.then(() => { changeColordelay('green',1000)})
.then(() => { changeColordelay('yellow',2000)})
.then(() => { changeColordelay('red',3000)})
.then(() => { changeColordelay('blue',4000)})
.then(() => { changeColordelay('purple',5000)})


//tidak harus sama dengan reject, yang penting buat parameter dan panggil



.catch((eror) => {
    console.log(eror)
});


