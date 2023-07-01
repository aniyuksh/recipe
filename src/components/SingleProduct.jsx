import React from 'react'
import {  useNavigate } from 'react-router'

const SingleProduct = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className='h-auto w-[200px] border border-gray-400 p-2' onClick={(e)=>navigate(`/single/${item.id}`)}>
      <div  >
        {/* image */}
          <div>
            <img src={item.image} alt={item} className='h-[250px] w-[200px]'/>
          </div>
          <div>
            <div>

            <h1>{item.name}</h1>
            </div>
            <div>
              <p>Cuisine : {item.cuisine}</p>
              <p>Ingredients : See Recipe</p>
              <p>Instructions : See Recipe</p>
            </div>
          </div>

      </div>
    </div>
  )
}

export default SingleProduct