import {Header} from './component/Header'
import {About} from './pages/About';
import {Home} from './pages/Home'
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <About/>
    </div>
  );
}