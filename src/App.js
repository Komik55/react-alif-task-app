import './App.css'
import Container from 'react-bootstrap/Container'
import PostParent from './components/PostParent'

function App() {
   return (
      <div className="App">
         <Container className="my-5">
            <PostParent />
         </Container>
      </div>
   )
}

export default App
