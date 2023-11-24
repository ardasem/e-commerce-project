import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import PageContent from './layout/PageContent';


function App() {
  return (
    <div className="App">
      <Header />
      <PageContent/>
      <Footer />
    </div>
  );
}

export default App;
