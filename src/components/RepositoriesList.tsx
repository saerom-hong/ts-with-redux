import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form
        className="flex items-center justify-center space-x-4 mb-6"
        onSubmit={onSubmit}
      >
        <input
          className="input input-primary w-64 me-4"
          placeholder="Type here"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn btn-secondary rounded-lg">Search</button>
      </form>
      {error && <h3 className="my-4">!! Please type package name</h3>}
      {loading && (
        <span className="loading-xl loading-spinner text-primary"></span>
      )}
      {!error && !loading && (
        <ul className="list bg-base-100 rounded-box shadow-xl my-2">
          {data.map((name) => (
            <li className="list-row list-col-wrap px-4 py-2" key={name}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
