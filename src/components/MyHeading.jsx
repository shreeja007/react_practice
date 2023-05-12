
// //normal function
// function MyHeading(){
//   return <h1>Heading</h1>
// }

// //arrow function
// const MyHeading = () => <h1>Heading</h1>



import React from 'react'

const MyHeading = (props) => {
  const a= 1 
  
  const obb = {
    abb:13,
    ds:23,
  }

  const {abb,ds} = obb   //destructuring


  return (
    <>
    <h1> Header {props.name} </h1>
    <div>{abb}</div>
    <main>Main Content</main>
    <footer>footer</footer>
    <MyHeadingExpo value = {props.price}/>
    </>
  )
}

const MyHeading123 = () =><div>MyHeadiasd 123</div>
   

export const MyHeadingExpo = ({value}) =><div>MyHeadiasd Exported {value}</div>
// const MyHeading123 = () => {
//     return (
//       <div>MyHeadiasd ng</div>
//     )
//   }

export default MyHeading

export { MyHeading123 }