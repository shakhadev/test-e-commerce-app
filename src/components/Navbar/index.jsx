import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <nav className="flex w-full items-center h-[100px] justify-between">
      <div className="logo">
        BUY<span className="text-[var(--mainColor)]">BEL</span>
      </div>
      <ul className="flex w-[30%] justify-between">
        <NavLink to={"/"}>
          <li className="text-[var(--thirdColor)]">Home</li>
        </NavLink>
        <NavLink to={"/company-adress"}>
          <li className="text-[var(--mainColor)]">Adress</li>
        </NavLink>
        <NavLink to={"/about-us"}>
          <li className="text-[var(--thirdColor)]">About us</li>
        </NavLink>
        <li className="text-[var(--mainColor)] pr-2">Your Cart</li>
      </ul>
    </nav>
  );
};

export default index;
