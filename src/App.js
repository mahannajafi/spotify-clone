import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainContainer } from './Components/MainContainer';
import { RightMenu } from './Components/RightMenu';
document.addEventListener('contextmenu', event => event.preventDefault());


function App() {

  return (
    <div className="App">
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>

      <div className="background">a</div>
    </div>
  );
}

export default App;
