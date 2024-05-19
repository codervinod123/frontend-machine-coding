import React from 'react'

const ProductCard = ({product}) => {
    console.log(product)
  return (
    <div className='border shadow-xl  h-[300px] flex flex-col justify-center items-center'>
          <img className='h-[200px]' src={product.images[0]} alt="product" />
          <h1 className='font-semibold px-4'>{product.title}</h1>
          <h1 className='font-semibold px-4'>{product.category}</h1>
          <h2 className='font-semibold px-4'>{product.price}</h2>
    </div>
  )
}

export default ProductCard
