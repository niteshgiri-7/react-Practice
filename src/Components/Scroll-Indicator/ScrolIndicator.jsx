import React, { useEffect, useState } from "react";
import "./style.css";
const ScrolIndicator = () => {
  const URL = "https://dummyjson.com/products?limit=100";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrolledPercentage, setScrolledPercentage] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const visiblePart = document.documentElement.clientHeight;
    const totalScrolledTillNow = document.documentElement.scrollTop;

    const actualHeight = totalHeight - visiblePart;
    /*
Subtracting: If you subtract the 20 cm visible part(window size you already looked through) from the 100 cm total height, you’re left with 80 cm. 
That 80 cm is the part of the poster you can scroll through—this is the actual scrollable area.
    */
    const percentage = (totalScrolledTillNow / actualHeight) * 100;
    console.log(percentage, "%");
    setScrolledPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrolledPercentage]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const json = await response.json();
      setData(json?.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="mainContainer">
        {" "}
        <h3>Please Wait, Data fetching!!!!</h3>
      </div>
    );
  }
  return (
    <div className="mainContainer">
      <div className="topContainer">
        <h3>Custom Scroll Indicator</h3>
        <div className="tracking-container">
          <div
            className="current-progress"
            style={{ width: `${scrolledPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="container">
        {data && data.length
          ? data.map((item, index) => <span>{item.title}</span>)
          : null}
      </div>
    </div>
  );
};

export default ScrolIndicator;
