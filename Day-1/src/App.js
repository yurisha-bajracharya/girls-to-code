import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Sidenav from './Sidenav';
import Footer from './Footer';
// import Task from './Task';

function App() {
  return (
    <div className="App">
     {/* <Task/> */}
     <Header title="Header"/>
     <div className='midSection'>
     <Sidenav title="Sidenav"/>
     <MainContent title="Main Content"/>
     </div>
     <Footer title = "Footer"/>
    </div>
  );
}

export default App;
