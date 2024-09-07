import React, { useEffect, useState } from "react";
import "./styles.css";
const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  const fetchData = async () => {
    const URL = `https://dummyjson.com/products?limit=20&skip=${
      count === 0 ? 0 : count * 20
    }`;
    try {
      setLoading(true);
      const response = await fetch(URL);
      if (response.status !== 200) {
        throw Error("error occurred");
      }
      const json = await response.json();
      console.log(json);
      if (json && json.products && json.products.length) {
        setProducts((prevData) => [...prevData, ...json.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products?.length >= 100) {
      setDisableBtn(true);
    }
  }, [products]);

  const handleLoadMore = () => {
    setCount(count + 1);
  };
  return loading ? (
    <div style={{ textAlign: "center", fontSize: "48px" }}>
      Please Wait, Data fetching
    </div>
  ) : (
    products && (
      <div className="mainContainer">
        <div className="container">
          {products?.map((item, index) => (
            <div className="cards" key={index}>
              <h3>{item.title}</h3>
              <div className="img-container">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <h2 className="brand">{item.brand}</h2>
            </div>
          ))}
        </div>

        <div className="button">
          <button disabled={disableBtn} onClick={handleLoadMore} className="button">
            {disableBtn ? "You reached to the 100 products" : "Load More"}
          </button>
        </div>
      </div>
    )
  );
};

export default LoadMore;
