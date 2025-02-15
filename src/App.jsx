// import Obj from './comps/Obj';
import Props from './comps/Props';
import Events from './comps/Events';
import './App.css'
const obj ={
  title:" Hi",
  Name:"Neeraj",
}
function App() {
  
  return (
    <>
   
         {/* <Obj/> */}
          <Props {...obj} > Vedio</Props>
          <Events onstart={()=>(console.log("play"))}  onstop={()=>(console.log("pause"))} >play</Events>
    </>
  );

}
export default App
