import React from "react";
import TabItems from "./TabItems";
const Tab = () => {
  const RandomComponent = () => {
    return <h1 style={{color:"red"}}>Some Random Content</h1>;
  };
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  return <div>
    <TabItems tabs={tabs}/>
  </div>;
};

export default Tab;
