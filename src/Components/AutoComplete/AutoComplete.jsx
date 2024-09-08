import React, { useEffect, useState } from "react";
import "./styles.css";
import Suggestion from "./Suggestion";
const AutoComplete = () => {
  const URL = "https://dummyjson.com/users";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const json = await response.json();
      console.log(json);
      setData(json.users.map((user) => user.firstName));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleChange = (e) => {
    const query = e.target.value;
    console.log("query", query);
    setSearchedText(query);
    if (query.length > 1) {
      const filtered = data.filter(
        (item) => item.toLowerCase().indexOf(query) > -1
      );
      console.log("filtered", filtered);
      setFilteredData(filtered);
      setShowSuggestion(true);
    }
  };
  console.log("searched", searchedText);

  const handleClick = (e) => {
    setSearchedText(e);
    setShowSuggestion(false);
    setFilteredData([]);
    console.log(e);
  };
  return (
    <div className="main-container">
      {loading ? (
        <h2>Please Wait</h2>
      ) : (
        <div>
          <input
            type="search"
            placeholder="enter name"
            value={searchedText}
            onChange={(e) => handleChange(e)}
          ></input>
          {showSuggestion && (
            <Suggestion filteredData={filteredData} handleClick={handleClick} />
          )}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
