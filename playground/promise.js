var addNumber=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a ==='number'&&typeof b ==='number')
                    resolve(a+b);
            else
                    reject('Not a number !')
                },1500)
    })
}

addNumber(2,7).then((res)=>{
       console.log(`Sum:${res}`)
       return addNumber(res,'10');
}).then((res)=>{
    console.log(`Sum:${res}`)
}).catch((err)=>{
    console('Error:',err)
})


// var promiseVar=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('App is working');
//     },1500)
  
// });

// promiseVar.then((res)=>{
// console.log(res);
// },(err)=>{
// onmouseleave.log(err);
// })