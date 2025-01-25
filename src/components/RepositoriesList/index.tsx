import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from './Button';
import List from './List';
import SearchInput from './SearchInput';

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
        <SearchInput term={term} setTerm={setTerm} />
        <Button />
      </form>
      {error && <h3 className="my-4">!! Please type package name</h3>}
      {loading && (
        <span className="loading loading-spinner text-primary w-20 m-16"></span>
      )}
      {!error && !loading && <List data={data} />}
    </div>
  );
};

export default RepositoriesList;
