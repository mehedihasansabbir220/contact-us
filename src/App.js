import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ContactUs from './Components/ContactUs/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
