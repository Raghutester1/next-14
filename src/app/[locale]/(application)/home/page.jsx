"use client"

import Searchitemdata from '@/component/Searchitemdata';
export default function HomePage({params}) {
  
  
  

  return (
    <div className="w-full flex justify-center m-3 flex-wrap">
  {
    Searchitemdata.data.map(e=>{
      return <div className='w-40 p-4' key={e.id}>
        <img src={e.img}/>
      </div>
    })
  }
    </div>
  );
}