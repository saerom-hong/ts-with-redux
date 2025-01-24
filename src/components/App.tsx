import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="font-display flex flex-col items-center min-h-screen p-4">
        <input
          type="checkbox"
          value="acid"
          className="toggle theme-controller mt-6"
        />
        <h1 className="text-3xl font-bold my-8">Search for a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
