import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../mock";
const index = () => {
  const { id } = useParams();
  const detail = data[id - 1].items;
  return (
    <>
      {detail.map((item, index) => (
        <div
          key={index}
          className=" bg-red-600 justify-center mb-4 flex flex-col gap-2"
        >
          <p className="w-[400px]">{item.name}</p>
          <p className="  w-[400px]">{item.leftamount}</p>
          <p className="  w-[400px]">{item.price}</p>
        </div>
      ))}
    </>
  );
};

export default index;
