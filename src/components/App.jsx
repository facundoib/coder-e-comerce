import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer default="Actualmente no hay productos para mostrar..." />
      </header>
    </div>
  );
}

export default App;
