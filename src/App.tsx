import './App.css';
import ItemsAdd from './views/items.add';
import ItemList from './views/item.list';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './redux/reducers';

const store = createStore(reducer, composeWithDevTools() )

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <ItemsAdd></ItemsAdd>
        <ItemList></ItemList>
      </Provider>
    </div>
  );
}

export default App;
