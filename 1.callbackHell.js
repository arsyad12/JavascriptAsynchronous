// ini contoh saat kita menggunakan function biasa diberi pending time, tidak akan berjalan jika waktu pendingnya 1 detik semua

// setTimeout(() => {
//     document.body.style.backgroundColor='red';
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor='yellow';
// }, 1000);


// setTimeout(() => {
//     document.body.style.backgroundColor='green';
// }, 1000);


// setTimeout(() => {
//     document.body.style.backgroundColor='blue';
// }, 1000);



//untuk mengatasi masalah diatas kita bisa menggunakan call back Hell, yaitu proses dimana memanggil function didalam function

setTimeout(() => {
    document.body.style.backgroundColor='red';
    setTimeout(() => {
        document.body.style.backgroundColor='green';
        setTimeout(() => {
            document.body.style.backgroundColor='yellow';
            setTimeout(() => {
                document.body.style.backgroundColor='blue';
            }, 1000);
        }, 1000); 
    }, 1000);
}, 1000);