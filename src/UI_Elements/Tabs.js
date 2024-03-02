import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button1 from "../AnimatedComponents/Button1/Button1";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={`tabs-container  mb-8`}>
      <div className={`flex flex-wrap gap-5  `}>
        {tabs?.map((tab, index) => (
          <Link key={index} to={tab.href}>
            <Button1
              className={`${activeTab === index && ""}`}
              onClick={() => handleTabClick(index)}>
              {tab.label}
            </Button1>
          </Link>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  darkMode: PropTypes.bool,
};

export default Tabs;
