import React, { useEffect, useState, useRef } from "react";
import { addMessage, getMessages, getUser } from "../../api/index";
import "./ChatBox.css";
import moment from 'moment';
import InputEmoji from 'react-input-emoji';
import profile from '../../images/defaultProfile.png';
import { Typography } from "@mui/material";

const ChatBox = ({ chat, currentUser, setSendMessage,  receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  }

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    const receiverId = chat.members.find((id) => id !== currentUser);
    // send message to socket server
    setSendMessage({ ...message, receiverId });
    // send message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage);
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  const scroll = useRef();
  const imageRef = useRef();

  return (
    <div className="ChatBox-container">
      {chat ? (
        <>
          <div className="chat-header">
            <div className="follower">
              <img
                src={profile}
                alt="Profile" 
                className="followerImage"
                style={{ width: "35px", height: "35px" }}
              />
              <div className="name" style={{ fontSize: "0.9rem", marginLeft: "10px" }}>
                <Typography>
                  <b>
                  {userData?.name}</b>
                </Typography>
              </div>
            </div>
          </div>
          <div className="chat-body">
            {messages.map((message) => (
              <div
                ref={scroll}
                className={
                  message.senderId === currentUser
                    ? "message own"
                    : "message"
                }
              >
                <span>{message.text}</span>{" "}
                <span>{moment(message.createdAt).fromNow()}</span>
              </div>
            ))}
          </div>
          <div className="chat-sender">
            <div onClick={() => imageRef.current.click()}>+</div>
            <InputEmoji
              value={newMessage}
              onChange={handleChange}
            />
            <div className="send-button button" onClick={handleSend}>Send</div>
            <input
              type="file"
              name=""
              id=""
              style={{ display: "none" }}
              ref={imageRef}
            />
          </div>
        </>
      ) : (
        <span className="chatbox-empty-message">
          Tap on a chat to start conversation...
        </span>
      )}
    </div>
  );
};

export default ChatBox;
