import { useState, KeyboardEvent, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import css from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = (loadUser: SearchProps) => {
  //TODO: remover nome do input após busca
  const [userName, setUsername] = useState("");
  useEffect(() => {
    loadUser.loadUser("robsonnsbr");
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser.loadUser(userName);
    }
  };
  return (
    <div className={css.search}>
      <h2>Busque por um usuário</h2>
      <div className={css.search_content}>
        <label htmlFor="Search">
          Search:{" "}
          <input
            type="text"
            name="Search"
            id="Search"
            placeholder="Search User"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </label>

        <button onClick={() => loadUser.loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
