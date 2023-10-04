import React from "react";
import DataCard from "../DataCard";
import { DataImg } from "./style";
import { NavLink, useParams } from "react-router-dom";
const index = ({madeIn, id }) => {
  // console.log("id", id);
  return (
    <div className="w-[50%]">
      <DataImg
        src="https://images.pexels.com/photos/18156121/pexels-photo-18156121.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
      <p>Country : {madeIn}</p>
      <NavLink to={`all-mebel/${id}`}>
        <button>View more... </button>
      </NavLink>
    </div>
  );
};

export default index;
