const SearchInput = ({
  term,
  setTerm,
}: {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      className="input input-primary w-64 me-4"
      placeholder="Type here"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
};

export default SearchInput;
