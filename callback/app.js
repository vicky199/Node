let getUser=(id,callback)=>{
   var user={
       id:id,
       name:'vikas'
   }
    setTimeout(()=>{
      callback(user);
    },2000)
}

getUser(100,(user)=>{
    console.log(user)
}
)