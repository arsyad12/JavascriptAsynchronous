const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 5000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};




//perbedaan promise yang ini dengan sebelumnya adalah

requestPromise('movie.com')


    .then((result) => {
        
        console.log(result);
        console.log('page1')
        return requestPromise('movie.com');

    })

    .then((result) => {
        console.log(result);
        console.log('page2');
        return requestPromise('movie.com');
    })

    .then((result) => {
        console.log(result);
        console.log('page3');
        return requestPromise('movie.com');
    })

    .then((result) => {
        console.log(result);
        console.log('page4');
        return requestPromise('movie.com');
    })



.catch((error) => {
    console.log('error',error)
});

