import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";


const AppContent=()=>{
  return (
    <div id="app-content">
       <Dashboard/>
    </div>
  )
}

const App = () => {
  return(<div id="app">
    <Navbar/>
    <AppContent/>
    <Footer/>
  </div>);
};

export default App;
