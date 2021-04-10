import { BrowserRouter as Router } from 'react-router-dom'
import Food from './Components/Food/Food';
import {GlobalStyle} from './GlobalStyle'
function App() {

return ( 
      <Router>
      <GlobalStyle/>
      <Food/>
      </Router>
    );
    }
      export default App;
