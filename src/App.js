import { Provider } from 'react-redux';
import CourseList from './components/CourseList';
import StoreMarketList from './components/StoreMarket';
import store from './components/Store/index';
import StoreCart from './components/StoreCart';

function App (){
  return (
    <Provider store={store}>
      <CourseList/>
      <StoreMarketList/>
      <StoreCart/>
    </Provider>
  )
}

export default App;
