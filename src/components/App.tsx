import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList/index';
import ThemeController from './ThemeController';
import Header from './Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="font-display flex flex-col items-center min-h-screen p-4">
        <ThemeController />
        <Header />
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
