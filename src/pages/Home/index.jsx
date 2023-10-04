import React from "react";
import Navbar from "../../components/Navbar";
import { data } from "../../mock";
import DataCards from "../../components/DataCards";
const index = () => {
  // console.log("data", data);
  return (
    <div className="w-[80%] flex flex-col justify-center mx-auto">
      <Navbar />
      <div>
        {data.map((item, index) => (
          <DataCards key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default index;
