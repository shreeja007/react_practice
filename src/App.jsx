 
import MyHeading from "./components/MyHeading"
import { MyHeading123, MyHeadingExpo} from "./components/MyHeading"

function App(){
  return(
    <div>
      <h1>
        <MyHeading name="HelloProps" text="Nice" price={72357}/>
       hello
       <MyHeading123 />
      </h1>
      <h2>
        <MyHeadingExpo/>
      </h2>
    </div>
  )
}

export default App