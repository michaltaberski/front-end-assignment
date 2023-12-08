import { FC, useState } from "react";
import "./App.css";

interface Props {}

const SearchBar: FC<Props> = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
