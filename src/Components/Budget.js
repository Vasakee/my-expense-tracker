import React, { useEffect, useRef, useState } from 'react'
import ItemList from './ItemList';
import Top from './Top'
import './Bugdet.css'

function Budget() {
    const [item, setItem] = useState([])
    const [final, setFinal] = useState(0)
    const stuff = useRef(null);
    const amount = useRef(null);

    useEffect(()=>{
      let total = 0;
      for(let i = 0; i<item.length; i++){
        total = total + parseInt(item[i].price) 
        }
      setFinal(total)
    },[item])
  

    const enterDetails = (e) =>{
      e.preventDefault();
      if(!stuff.current.value||!amount.current.value){
         alert('No Transaction was entered')
      }else{
     setItem([...item,{thing:stuff.current.value,
      space: '    ',
      price: amount.current.value,
      key:Date.now()}
    ]);

     stuff.current.value = '';
     amount.current.value = null;
  }
    }
  return (
    <div className='entire'>
      <Top final={final} />
      <form onSubmit={enterDetails} >
        <div className='styles'>
        <input type={'text'} name='item' className='item' placeholder='item' ref={stuff}/>
        <input type={'number'} name='amount' className='amount' placeholder='amount' ref={amount}/>
         <label placeholder='type'></label>
         <input type={'submit'} value='enter' className='submit' />
         </div>
      </form>
       <ItemList item={item} setItem={setItem}/>
    </div>
  )
}

export default Budget
