import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar({ authenticate, setAuthenticate }) {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Hone",
    "Sale",
    "지속가능성성",
  ];
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoMain = () => {
    navigate("/");
  };

  const search =(event)=>{
     
     if(event.key  == "Enter"){
      let keyword=event.target.value;
      console.log(keyword)
      navigate(`/?q=${keyword}`)
     }
  }
  return (
    <div>
      <div className="login-button" onClick={gotoLogin}>
        <FaRegUser />
        {authenticate ? (
          <span onClick={() => setAuthenticate(false)}>로그아웃</span>
        ) : (
          <span>로그인</span>
        )}
      </div>
      <div className="nav-section" onClick={gotoMain}>
        <img
          src="https://blog.kakaocdn.net/dn/OtSVd/btrS0hnajEn/Iixt8Hi0kV2KKxyiyQhqW0/img.png"
          alt=""
          width={100}
        />
      </div>
      <div className="menu_list">
        <ul>
          {menuList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="input">
          <IoSearch />
          <input type="text" onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
