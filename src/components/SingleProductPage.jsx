import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from '../context/ContextFile';
const SingleProductPage = () => {
    const {id} = useParams();
    const {data} = useContext(Context);
    console.log(id)
    
    const item = data.find((obj)=>obj.id === Number(id))
  return (
    <div className='p-10'>

        <div className='flex justify-center font-semibold text-4xl'>
            <h1>{item.name}</h1>
        </div>
        <div className='flex gap-8'>
            <div>
                    <img src={item.image} alt={item} className='h-[500px] w-[300px]' />
            </div>
            <div>
                    <p> <span className='font-semibold'>Cuisine : </span> {item.cuisine}</p>
                    <p><span className='font-semibold'>Ingredients : </span>{item.ingredients}</p>
                    <p><span className='font-semibold'>Instructions :</span> <ol>{item.instructions.map((step,index)=>{
                      return(
                        <li key={index}>
                          {step}
                        </li>
                      )
                    })}</ol></p>
                    
                    
            </div>
        </div>

    </div>
  )
}

export default SingleProductPage