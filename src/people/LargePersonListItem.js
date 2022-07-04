
import React from 'react'

export default function LargePersonListItem({person}) {
  const {name, age} = person
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </>
  )
}





































// export default function LargePersonListItem({ person }) {
//     console.log(person)
//     const { name, age, hairColor, hobbies } = person;
  
//     return (
//         <>
//         <h3>{name}</h3>
//         <p>Age: {age} years</p>
//         <p>Hair Color: {hairColor}</p>
//         <h3>Hobbies:</h3>
//         <ul>
//             {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
//         </ul>
//         </>
//     );
//   }
  





































// export default function LargePersonListItem({ person }) {
//     console.log(person)
//     const { name, age, hairColor, hobbies } = person;
  
//     return (
//         <>
//         <h3>{name}</h3>
//         <p>Age: {age} years</p>
//         <p>Hair Color: {hairColor}</p>
//         <h3>Hobbies:</h3>
//         <ul>
//             {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
//         </ul>
//         </>
//     );
//   }
  