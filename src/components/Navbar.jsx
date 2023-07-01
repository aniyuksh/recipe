import React, { useContext } from 'react'
import { Context } from '../context/ContextFile'
const Navbar = () => {

  const {searchChoice , setSearchChoice  , inpData,  setInpData} = useContext(Context);

  function filterSelector(e){
    e.preventDefault();
    setSearchChoice(e.target.value)
    // console.log(searchChoice)
  }

  function handleInput(e){
    e.preventDefault();
    setInpData(e.target.value)
    
  }


  return (
    <div className='flex'>

      <div className='border m-5'>
        {/* search */}
        <input type="text" placeholder='search' className='p-1' onChange={(e)=>handleInput(e)}/>
      </div>
      <div className=''>
        {/* radio */}
        <input type="radio" name = "Name" value="Name" checked={searchChoice === "Name"} onChange={(e)=>filterSelector(e)}/>Name
        <input type="radio" name = "Ingredients" value="Ingredients" checked={searchChoice === "Ingredients"} onChange={(e)=>filterSelector(e)}/>Ingredients
        <input type="radio" name = "Cuisine" value="Cuisine" checked={searchChoice === "Cuisine"} onChange={(e)=>filterSelector(e)}/>Cuisine
      </div>

    </div>
  )
}

export default Navbar