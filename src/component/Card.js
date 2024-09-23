"use client"
import React, { useEffect, useId, useRef } from 'react'
import './Card.css'
import {Currency} from './Currency'
function Card(props) {
  const inputid =useId()
  const lableid=useId()
  const input=useRef()
  const lable=useRef()
  const date=new Date()
console.log(props.grid)
 useEffect(()=>{
  let temp=new Array()
  temp=JSON.parse(localStorage.getItem('Mywishlist'))

  if(temp!==null){
  temp.map((e,i)=>{
    if(temp[i].id===props.data.id){
        input.current.checked=true
        lable.current.classList.add("text-danger")
    }
  })
}
 },[])
  function changeevent(){
    lable.current.classList.toggle("text-danger")
 
    if(input.current.checked==true){
      
      
      if(localStorage.getItem('Mywishlist')===null){
        localStorage.setItem("Mywishlist",`[${JSON.stringify(props.data)}]`)
      }
    else{
      let temp=JSON.parse(localStorage.getItem("Mywishlist"))
      temp.push(props.data)
      localStorage.setItem("Mywishlist",JSON.stringify(temp))
    }
    }
   else{
    let temp=JSON.parse(localStorage.getItem("Mywishlist"))
    let current=temp.filter(e=>{
      return e.id!==props.data.id
    })
    localStorage.setItem("Mywishlist",JSON.stringify(current))
   }
  }

  return (
    <>
   {props.grid===true? <div className='col mt-3'>
          <div class="  bg-white d-flex flex-column main-div h-100 w-100 user-select-none   align-items-center shadow-sm ">
              <span className='align-self-end  me-3 position-lg-relative d-flex flex-column justify-content-center align-items-center mt-2'>
            <input ref={input} id={inputid} onChange={changeevent} className="position-absolute visually-hidden" type='checkbox'/>
            <label className="text-secondary like-lable" ref={lable} id={lableid} htmlFor={inputid} style={{fontSize:'25px'}}>&#9829;</label>
            </span>
  <img style={{width:'auto',height:'200px'}}   src={props.data.img} class=" p-2 p-lg-0 justify-content-center " alt="..."/>
  <div class=" mt-3 px-2 px-lg-3 ">
  
    <p class=" mt-2  text-wrap hover-text-blue">{'BOZICA Best Baby Gift Learning educational Assembling creative blocks construction  (100 Pieces)'.slice(0,45)}...</p>
    <span class="card-title h5 me-1">&#8377;12,000</span> <span><del className="text-secondary h6">&#8377;15,000</del></span><b className="text-success ps-2 h6">7% off</b>
   <div className="mt-1 d-flex align-items-md-baseline"> <span className="badge h4  bg-success text-white rounded-1 py-1 px-2">4.3 &#9733;</span>
    <span className="text-secondary  ps-2">(5,499)</span></div>
  </div>
</div>
</div>
:
<div className='col-12  w-100 '>
          <div class="row p-3  bg-white main-div user-select-none position-relative  shadow-sm ">
              <span className='align-self-end   d-flex flex-column align-self-start  mt-2'>
            <input ref={input} id={inputid} onChange={changeevent} className="position-absolute visually-hidden" type='checkbox'/>
            <label className="text-secondary like-lable position-absolute end-0 top-0 me-3" ref={lable} id={lableid} htmlFor={inputid} style={{fontSize:'25px'}}>&#9829;</label>
            </span>
  <img style={{width:'auto',height:'220px'}}   src={props.data.img} class=" justify-content-center col-3 " alt="..."/>
  <div class=" col-6 ">
  
    <p class="text-wrap hover-text-blue m-1">{'BOZICA Best Baby Gift Learning educational Assembling creative blocks construction (100 Pieces)'}</p>
     
   <div className=" d-flex ps-1 align-items-md-baseline"> <span className="badge h4  bg-success text-white rounded-1">4.3 &#9733;</span>
    <span className="text-secondary  ps-2">(5,499)</span>
    </div>
    <ul style={{fontSize:"14px"}} className="p-0 ps-4">
      <li>8 GB RAM | 256 GB ROM</li>
      <li>16.94 cm (6.67 inch) Full HD+ Display</li>
      <li>64MP (OIS) + 8MP + 2MP | 16MP Front Camera</li>
      <li>5000 mAh Battery</li>
      <li>Qualcomm Snapdragon 7+ Gen 2 (4nm) Processor</li>
      <li>2 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories</li>
    </ul>
  </div>
  <div className="col-3">
  <span class="h5"><Currency value={12000}/></span><span className='ms-3'>Verified</span>
  <br/>
  <span><del className="text-secondary h6">&#8377;15,000</del></span><b className="text-success ps-2 h6">7% off</b><br/>
  <span>Free delivery by </span><b>{date.getDate()+2+' '+date.toLocaleDateString('default',{month:'short'})}</b><br/>
  <span style={{backgroundColor:'#f3ccff',color:"#691883"}} className=' badge p-2 mt-2'>Top Discount on Sale</span><br/>
  <span className="mt-2" style={{fontSize:"15px"}}>Up to <b><Currency value={23200}/></b> Off on exchange</span>

  </div>
</div>
</div>
}


</>
  )
}

export default Card