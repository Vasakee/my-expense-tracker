import React from 'react'
import Items from './Items'

function ItemList({ item, setItem}) {
  const removeIncome = i =>{
    const newList = item.filter(order => order.key !== i)
    setItem(newList)
  }
  
  return (
    <div>
      {item.map(order=>{
        return <div>
          <Items key={Date.now()} order={order} removeIncome={removeIncome}/>
        </div>
      })}
    </div>
  )
}

export default ItemList
