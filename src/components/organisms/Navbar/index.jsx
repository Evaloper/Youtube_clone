import React from "react";
import { button } from "../../../theme/styleDefinition";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { Image } from "../../atoms/Image";
import { Input } from "../../atoms/Input";
import pics from "../../../assets/pics.jpg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    // <Icon type="hamburger" />
    <div className="flex flex-center flex-between top-nav">
      <div className="flex flex-align">
        <Icon type="hamburger" width="20px" />
        <div className="flex ytb-div">
          <Icon type="youtube" width="32px" style={{ fill: "red" }} />
          <p className="txt-youtube">
            YouTube<sup className="sup-txt">NG</sup>
          </p>
        </div>
      </div>
      <div className="flex flex-center">
        <div className="search-div">
          <form action="" className="flex-center">
            <Input
              type="text"
              name="Search"
              className="nav-inp"
              placeholder="Search"
            />
            <Input type="button" className="btn-srch" placeholder="" />
            <Icon type="search" className="icon-srch" width="20px" />
          </form>
        </div>
        <div className="">
          <a href="">
            <Icon type="mic" />
          </a>
        </div>
      </div>
      <div className="flex flex-align">
        <Icon type="video" width="20px" className="left-margin" />
        <Icon type="bell" width="20px" className="left-margin" />
        <div className="pfile-div">
          <Image src={pics} className="pfile-pics left-margin" width="20px" />
        </div>
      </div>
    </div>
  );
};
