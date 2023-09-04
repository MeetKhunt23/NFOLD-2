import React, { useState } from "react";
import "./messagebox.css";
import Form from "react-bootstrap/Form";
import { AiOutlineSend } from "react-icons/ai";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Messagebox = () => {
  const [message, setmessage] = useState("");
  console.log("message", message);

  const sendmessage = async () => {
    var obj = {};
    obj["sender_id"] = "170";
    obj["receiver_id"] = "170";
    obj["message"] = message;

    var data = JSON.stringify(obj);

    fetch("http://192.168.1.100/nearfold_test/app/messages/post_message", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => {
        response.json().then((res) => {
          // console.log("res", res);
          if (res.success === "yes") {
            NotificationManager.success("Message Sent");
          }
        });
      })
      .catch((error) => error);
  };

  const getpostmessages = async () => {
    var obj = {};
    obj["sender_id"] = "170";
    obj["user_id"] = "170";
    obj["page"] = "1";

    var data = JSON.stringify(obj);

    fetch("http://192.168.1.100/nearfold_test/app/messages/get_post_messages", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => {
        response.json().then((res) => {
          // console.log("res", res);
          if (res.success === "yes") {
            NotificationManager.success("Message Sent");
          }
        });
      })
      .catch((error) => error);
  };

  const handlesend = () => {
    sendmessage();
    getpostmessages();
  };

  return (
    <div>
      <div className="chatbox">
        <div className="inputtext">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              className="msg"
              onChange={(e) => {
                setmessage(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <div
          className="sendmsgicon"
          onClick={() => {
            handlesend();
          }}
        >
          <AiOutlineSend
            style={{ color: "white", fontSize: "32px", fontWeight: "600" }}
          />
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Messagebox;
