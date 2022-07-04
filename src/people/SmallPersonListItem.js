
export default function SmallPersonListItem({person}) {
  const {name, hairColor, hobbies} = person
  return (
    <>
    <h2>{name}</h2>
    <div>Hair Color: {hairColor}</div>
    {hobbies.map(hobby => <div>hobby: {hobby}</div>)}
    </>
  )
}







































// import React from 'react'

// export default function SmallPersonListItem({ person }) {
//   const { name, age } = person;

//   return (
//     <p>Name: {name}, Age: {age} years</p>
//   );
// }
