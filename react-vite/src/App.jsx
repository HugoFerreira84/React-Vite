import Box from './componentes/Box'
import './style.css'
function App() {

  return (
    <div className='d-flex'>
      <Box banana='banana 1' number={1} color="red"/>
      <Box banana='banana 1' number={2} color="green"/>
      <Box banana='banana 1' number={3} color="blue"/>
      <Box banana='banana 1' number={4} color="red"/>     
    </div>
  )
}

export default App
