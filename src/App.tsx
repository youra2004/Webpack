import './style.css'
import image from './image.png'

const App = () => (
  <div>
    <h1>React Typescript - {process.env.name}</h1>
    <img src={image} alt="img" />
  </div>
)

export default App
