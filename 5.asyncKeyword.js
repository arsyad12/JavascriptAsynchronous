// async keyword berfungsi untuk menjadikan function menjadi promise secara otomatis

const hallo = async()=>{
    
    throw console.log('gagal ges');
    // return 'berhasil';
    
}


hallo().then((response) => {
  
    console.log(response)
   
    .catch((error) => {
        
        console.log(error)
    })
});


//return akan menjalankan fungsi then saat kondisi berhasil 
//throw akan menjalan kan fungsi catch saat kondisi gagal 



//NOTE PENTING, DIDALAM ASYNC KITA GABISA PANGGIL 2 HASIL SEKALIGUS, BERHASIL DAN GAGAL, UNTUK SOLUSINYA BISA PAKE TRY AND CATCH 
//CEKKK NO 7 GES