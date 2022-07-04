import React from 'react'

export default function NumberListItem({
    items, 
    resourceItem, 
    itemComponent: ItemComponent
}) {
  return (
    <>
        {items.map((item, i) => 
        <> 
            <h2>Number: {i + 1}</h2>
            <ItemComponent key={i} {...{[resourceItem]:item}}/>
        </>
        
        )}
    </>
  )
}
