import React, { Children } from "react";
import { Icon } from "../../atoms/Icon";

export const IconText = (props) => {
  const { type } = props;
  if (type === "home") {
    return (
      <div className="flex flex-align icon-txt">
        <Icon type="home" />
        <p style={{marginLeft: "15px", fontSize: "14px"}}>Home</p>
      </div>
    );
  }
  if (type === "short-video") {
    return (
      <div className="flex flex-align icon-txt">
        <Icon type="short-video" />
        <p style={{marginLeft: "15px", fontSize: "14px"}}>Shorts</p>
      </div>
    );
  }

  if (type === "subscription") {
    return (
      <div className="flex flex-align">
        <Icon type="subscription" />
        <p style={{marginLeft: "15px", fontSize: "14px"}}>Subscriptions</p>
      </div>
    );
  }
  if (type === "library") {
    return (
      <div className="flex flex-align">
        <Icon type="library" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Library</p>
      </div>
    );
  }
  if (type === "History") {
    return (
      <div className="flex flex-align">
        <Icon type="History" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>History</p>
      </div>
    );
  }
  if (type === "yourvid") {
    return (
      <div className="flex flex-align">
        <Icon type="yourvid" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Your video</p>
      </div>
    );
  }
  if (type === "watchlater") {
    return (
      <div className="flex flex-align">
        <Icon type="watchlater" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Watch later</p>
      </div>
    );
  }
  if (type === "likedvid") {
    return (
      <div className="flex flex-align">
        <Icon type="likedvid" />
        <p style={{marginLeft: "15px", fontSize: "14px",}}>Liked videos</p>
      </div>
    );
  }

  
  return null;
};
