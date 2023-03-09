import React from "react";
import { Button } from "../../atoms/Button";
import { IconText } from "../../molecules/IconText";
import CardTemplate from "../../templates/Card";
import "./verticalbar.css";

function MainSection() {
  return (
    <div className="main margin flex">
      {/*Veritcal Bar */}
      <div className="vertical-bar">
        <div className="padding-layout">
          <IconText type="home" />
        </div>

        <div className="padding-layout">
          <IconText type="short-video" />
        </div>
        <div className="padding-layout">
          <IconText type="subscription" />
        </div>
        <hr/>
        <div className="padding-layout">
          <IconText type="library" />
        </div>
        <div className="padding-layout">
          <IconText type="History" />
        </div>
        <div className="padding-layout">
          <IconText type="yourvid" />
        </div>
        <div className="padding-layout">
          <IconText type="watchlater" />
        </div>
        <div className="padding-layout">
          <IconText type="likedvid" />
        </div>
      </div>
      <div className="content">
        <div className="chips-wrapper">
          <div className="chips">
            <a className="btn"><Button>All</Button></a>
            <a className="btn"><Button>Live</Button></a>
            <a className="btn"> <Button>Music</Button></a>
            <a className="btn"><Button>Contemporary Music</Button></a>
            <a className="btn"><Button>Nathaniel Bassey</Button></a>
            <a className="btn"><Button>ReactJS</Button></a>
            <a className="btn"><Button>Worship Music</Button></a>
            <a className="btn"><Button>Amapiano Music</Button></a>
            <a className="btn"><Button>Javascript</Button></a>
            <a className="btn"><Button>Nollywood</Button></a>
            {/* <a className="btn"><Button>Computer Programming</Button></a>
            <a className="btn"><Button>Stocks</Button></a> */}
            {/* <a className="btn"><Button>Forex Trading</Button></a>
            <a className="btn"><Button>Nollywood</Button></a>
            <a className="btn"><Button>Judikay</Button></a>
            <a className="btn"><Button>Gaming</Button></a>
            <a className="btn"><Button>Chill-out Music</Button></a>
            <a className="btn"><Button>Nigeria History</Button></a>
            <a className="btn"><Button>Guc</Button></a>
            <a className="btn"><Button>Technical Writing</Button></a>
            <a className="btn"><Button>Justice Court</Button></a> */}
          </div>
        </div>
        <div>
          <CardTemplate />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
