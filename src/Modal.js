import { useState } from "react"
import styled from "styled-components"

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1,
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5)
`

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`


export default function Modal({children}) {
    const [shouldOpen, setShouldOpen] = useState(false)
  return (
    <>
        <button onClick={() => setShouldOpen(true)}>Open Modal</button>
        {shouldOpen && <ModalBackground onClick={() => setShouldOpen(false)}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={() => setShouldOpen(false)}>Hide Model</button>
                {children}
            </ModalBody>
        </ModalBackground>}
    </>
  )
}































// const ModalBackground = styled.div`
//     position: fixed;
//     z-index: 1,
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     overflow: auto;
//     background-color: rgba(0, 0, 0, 0.5)
// `

// const ModalBody = styled.div`
//     background-color: white;
//     margin: 10% auto;
//     padding: 20px;
//     width: 50%;
// `

// export default function Modal({children}) {
//   const [shouldOpen, setShouldOpen] = useState(false)

//   return (
//     <>
//         <button onClick={() => setShouldOpen(true)}>Open Modal</button>
//         { shouldOpen && 
//             <ModalBackground onClick={() => setShouldOpen(false)}>
//                 <ModalBody onClick={e => e.stopPropagation()}>
//                     <button onClick={() => setShouldOpen(false)}>Hide Model</button>
//                     {children}
//                 </ModalBody>
//             </ModalBackground>
//         }
//     </>
//   )
// }
