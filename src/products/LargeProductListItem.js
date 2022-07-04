import React from 'react'

export default function LargeProductListItem({products}) {
    const {name, price, description, rating} = products
  return (
    <>
        <h1>{name}</h1>
        <ul>{price}</ul>
        <ul>{description}</ul>
        <ul>{rating}</ul>
    </>
  )
}
