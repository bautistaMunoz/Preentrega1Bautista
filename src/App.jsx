import NavBar from './NavBar/NavBar'
import ItemListContainer from "./itemlistcontainer/ItemListContainer"
import '../src/App.css'

function App(){

  return(
    <div className='container-app'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a tienda footie"}/>
    </div>
  )

}
export default App;