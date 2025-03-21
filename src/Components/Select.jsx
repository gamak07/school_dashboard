import React from "react";

const Select = ({ className, children }) => {
  return (
    <select className={className} name="" id="">
      {children}
    </select>
  );
};

export default Select;
