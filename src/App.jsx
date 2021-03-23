import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer default="Actualmente no hay productos para mostrar..." 
        items={[
        {"id":1,"name":"celular 1", "count": 0},
        {"id":2, "name":"celular 2", "count": 0},
        {"id":3, "name":"celular 3", "count": 0}
        ]}/>
      </header>
    </div>
  );
}

export default App;
