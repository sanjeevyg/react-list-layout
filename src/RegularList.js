import React from 'react'

export default function RegularList({
  items,
  resourceItem,
  itemComponent: ItemComponent
}) {
  return (
    <>
      {items.map((item, i) => 
        <ItemComponent key={i} {...{[resourceItem]: item}}/>
      )}
    </>
  )
}































// export default function RegularList({
//     items,
//     resourceName,
//     itemComponent: ItemComponent,
// }) {
//   return (
//     <>
//     {items.map((item, i) => (
//         <ItemComponent key={i}  {...{[resourceName]:item}}/>
//     ))}
//     </>
//   )
// }









































