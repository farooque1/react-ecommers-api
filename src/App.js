import './App.css';
import Footer from './componant/Footer';
import Home from './componant/Home';
import Nav from './componant/Nav';
import Product from './componant/Product';
import {BrowserRouter ,Route , Switch } from 'react-router-dom';
import Products from './componant/Products';
import Cart from './componant/Cart';


function App() {

  return (

<div className="App">
      <BrowserRouter>
      <Nav />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Products/:id' component={Products} />
            <Route exact path='/Product' component={Product} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/' component={Footer} />
        </Switch>
      </BrowserRouter>
</div>

  );
}
export default App;
