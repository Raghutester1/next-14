// "use client"
// import React, { useEffect } from "react"
// import { socket } from "@/component/Socket"
// const chat =()=>{
//     useEffect(()=>{
//    socket.on('connect',()=>{
//     console.log("connected",socket.id)
//    })
//    socket.on("welcome",(data)=>{
//     console.log(data)
//    })
//    socket.emit("client","welcome to client")

//     })
//     return(
//         <h1>chat</h1>
//     )
// }
// export default chat