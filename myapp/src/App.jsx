
import './App.css'
import Left from './components/LeftSide/left'
import Right from './components/RightSide/right'
import Main from './components/Main/main'
import Icon from './components/Icon/icon'

function App() {
  

  return (
    <>
   
   <div className='container'> 
  
    <Icon/>  
    <div className='main'>
 <Left/>
 <Main/>
 <Right/>

 </div>
    </div>
    </>
  )
}

export default App
