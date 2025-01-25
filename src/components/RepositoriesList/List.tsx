const List = ({ data }: { data: string[] }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-xl my-2">
      {data.map((name) => (
        <li className="list-row list-col-wrap px-4 py-2" key={name}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default List;
