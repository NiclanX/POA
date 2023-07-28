import { Navbar } from './Navbar';
import './App.css';
import { Notes } from './Notes';

function App() {
  return (
    <>
   <Navbar/>
   <div className="container">
    <Notes/>
   </div>
   
   </>
  );
}

export default App;
