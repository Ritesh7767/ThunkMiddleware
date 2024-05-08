import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchData from './redux/thunkMiddleware'

function App() {

  let coffeeData = useSelector(state => state.dataSlice)
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchData()), [])
  
  console.log(coffeeData)
  return (
    <>
      <div className='grid grid-flow-row-dense grid-cols-4 gap-5'>
        {coffeeData?.map(coffee => {
          const {title, description, image, price} = coffee
          return (
            <div className='rounded-md flex flex-col justify-between p-2 shadow-lg'>
              <img src={image} className='w-full h-1/2' />
              <h1 className='text-xl font-bold'>{title}</h1>
              <p className='overflow-clip h-1/4 border-2'>{description}</p>
              <p className='text-xl'>$ <strong>{price}</strong></p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
