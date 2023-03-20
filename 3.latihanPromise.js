//Latihan request url dengan promise
// PADA PROMISE UNTUK MEMANGGIL HASIL BISA MENGGUNAKAN THEN UNTUK HASIL DAN CATCH UNTUK HNDLING ERROR
// Promise version


const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};


requestPromise('movie.com')
.then((response)=>{
    console.log('succes',response)
        requestPromise('movie.com')
            .then((response)=>{
                console.log('succes',response)    
                    requestPromise('movie.com')
                        .then((response)=>{
                            console.log('succes',response)
                        
                        })


.catch((error) => {
    console.log('error',error)
    
});

})

.catch((error) => {
    console.log('error',error)
    
});

})

.catch((error) => {
    console.log('error',error)
    
});