import React from 'react'

export default function SmallProductListItem({products}) {
    const {name, price, rating} = products
  return (
    <>
        <div>Name: {name}</div>
        <div>Price: {price}</div>
        <div>Rating: {rating}</div>
    </>
  )
}
