import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home.js';
import Note from './Pages/Note/Note.js';

import { BrowserRouter , Switch , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      	      <Switch>
				  <Route exact path="/" component={Home} />
				  <Route exact path="/note/:id" component={Note} />
			  </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
