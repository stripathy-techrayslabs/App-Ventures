import React from 'react'

const Obj = () => {
    const product =[ 
        {title : "tree", id:1, isFruit:false},
        {title :" carrot", id:2, isFruit:false},
        {title :" mango", id:3, isFruit:true}
      ]
         
      return (
        <>
        <ul>
             {product.map((prod, id) => (
              <li  key={prod.id}
              style={{
                color: prod.isFruit ? "red" : "yellow",}}>
              {prod.title}
              </li>
             ))}
              </ul>
             
        </>

    
  )
}

export default Obj;