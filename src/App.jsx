import './App.css'
import Cal from './Components/Cal'
import bgImage from '../src/assets/bgImage.jpg'


function App() {

  return (
    <div className='w-100 ' style={{height:"100vh", backgroundImage:`url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover"}}>
      <Cal/>
    </div>
  )
}

export default App