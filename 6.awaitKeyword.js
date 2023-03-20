// await berfungsi untuk melakukan / memberi jeda waktu untuk menunggu proses fungsi/promise pertama berjalan dulu , jika sudah selesai baru menjalankan yang selanjutnya



const changeColor = (color,delay) =>{

return new Promise((resolve, reject) => {
        
    setTimeout(() => {

if (delay>6000) {

    reject('eror bro, lama beut')
}

else{
  document.body.style.backgroundColor = color;
}

  resolve()

}, delay);
    
})

}

// changeColor('red',2000)

// .then(() => { changeColor('green',1000) })
// .then(() => { changeColor('yellow',2000) })
// .then(() => { changeColor('orange',3000) })
// .then(() => { changeColor('blue',4000) })
// .then(() => { changeColor('grey',5000) })
// .then(() => { changeColor('black',6000) })


// .catch((err) => {
//     console.log(err)
// });


//untuk membuat await, buat function baru dulu, lalu panggil function yang udah dibuat diawal 

async function changeColor2() {
    await changeColor('red',1000);
    await changeColor('green',1000);
    await changeColor('yellow',1000);
    await changeColor('grey',1000);
    await changeColor('orange',1000);
    await changeColor('pink',1000);
    return 'all done'
}

changeColor2().then((result) => {
    alert(result)
}).catch((err) => {
    
});