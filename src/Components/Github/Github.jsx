import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
const Github = () => {
  const val = useRef(null);
  const URL = "https://api.github.com/users/";
  const [username, setUsername] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchUser = async () => {
    setLoading(true);
    const response = await fetch(URL + `${username}`);
    const json = await response.json();
    console.log(json);
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    if (username) {
      fetchUser();
    }
  }, [username]);
  const handleClick = () => {
    const value = val.current.value;
    console.log(value);
    setUsername(value);
  };
 if(loading){
    return <h2>loading</h2>
 }
 console.log("data",data)
  return (
    <main className="wrapper">
        <div className="whole-container">

      <div className="header">
        <input type="text" placeholder="Enter username" ref={val}></input>
        <button onClick={handleClick}>Search</button>
      </div>
      {loading && <h6 className="loading">please wait</h6>}

      <div className="body-container">

     
      { data ? 
        <>
        <div className="body-header">
      
        <img src={data.avatar_url} alt="userProfile"></img>
        <h2>{data.login}</h2>
        </div>
        <div className="body-content">
            <span>followers:{data.followers}</span>
            <span>following:{data.following}</span>
            <span>public repo:{data.public_repos}</span>
        </div>
        </>
      :null}
      </div>
   


        </div>
    </main>
  );
};

export default Github;
