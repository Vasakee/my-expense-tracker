import React from 'react'

function Items({order,removeIncome}) {
    const removeItem = i => {
        removeIncome(i)
    }
  return (
    <div className='package'>
     <span className='thing'>{order.thing}</span>  <span className='price'>${order.price}</span>   <span className='gain'>{order.gain}</span> 
      <button onClick={()=>removeItem(order.key)}  className='delete'>Remove</button> 
      <br />
    </div>
  )
}

export default Items
