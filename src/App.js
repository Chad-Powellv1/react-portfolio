import {Header} from './components/Header'
import {Home} from './pages/Home'
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Home />
    </div>
  );
}