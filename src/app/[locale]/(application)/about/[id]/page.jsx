import React from 'react'

const page = ({params}) => {
  return (
    <>
    <div>detail page</div>
    <p>Detail page{JSON.stringify(params)}</p>
    </>
  )
}

export default page