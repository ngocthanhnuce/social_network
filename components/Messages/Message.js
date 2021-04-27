import React, { useState } from "react";
import { Icon, Popup, Image } from "semantic-ui-react";
import calculateTime from "../../utils/calculateTime";

function Message({ message, user, deleteMsg, bannerProfilePic, divRef }) {
  const [deleteIcon, showDeleteIcon] = useState(false);

  const ifYouSender = message.sender === user._id;

  return (
    <div className="bubbleWrapper" ref={divRef}>
      <div
        className={ifYouSender ? "inlineContainer own" : "inlineContainer"}
        onClick={() => ifYouSender && showDeleteIcon(!deleteIcon)}
      >
        <img
          className="inlineIcon"
          src={ifYouSender ? user.profilePicUrl : bannerProfilePic}
        />
        <Popup
          pinned
          content={calculateTime(message.date)}
          on="click"
          trigger={
            <div
              className={ifYouSender ? "ownBubble own" : "otherBubble other"}
            >
              {message.msg}
            </div>
          }
        />
        {deleteIcon && (
          <Popup
            trigger={
              <Icon
                name="trash"
                color="red"
                style={{ cursor: "pointer", marginTop: "15px" }}
                onClick={() => deleteMsg(message._id)}
              />
            }
            content="Xóa tin nhắn khỏi hộp thư đến!"
            position="top right"
          />
        )}
      </div>
      {/* 
      <span className={ifYouSender ? "own" : "other"}>
        {calculateTime(message.date)}
      </span> */}
    </div>
  );
}

export default Message;
