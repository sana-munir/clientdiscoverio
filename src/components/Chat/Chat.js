import React, {useState, useEffect, useRef} from 'react';
import './Chat.css';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { userChats } from '../../api';
import NavIcons from './NavIcons';
import {io} from 'socket.io-client';
import ChatBox from './ChatBox';
import Conversation from './Conversation';
import { useDispatch } from "react-redux";

const Chat = () =>{
    const dispatch = useDispatch();
    const socket = useRef();
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);
    const userId = user?.result.googleId || user?.result?._id;
    const [chats, setChats] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    // Get the chat in chat section
    useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(userId);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
    }, [userId]);

    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", userId);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
        });
    }, [user]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage!==null) {
            socket.current.emit("send-message", sendMessage);}
    }, [sendMessage]);

    // Get the message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            console.log(data)
            setReceivedMessage(data);
        }
    );
    }, []);

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== userId);
        const online = onlineUsers.find((user) => user.userId === chatMember);
        return online ? true : false;
    };

    return(
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
            <div className="Search">
                <input type="text" placeholder="#Explore" size={36}/>
                <div className="s-icon">
                    <SearchOutlined />
                </div>
            </div>
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                {chats.map((chat) => (
                <div
                    onClick={() => {
                    setCurrentChat(chat);
                }}
                >
                <Conversation
                  data={chat}
                  currentUser={userId}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
                </div>
                </div>
            </div>

            {/*  Right Side */}
            <div className="Right-side-chat">
            <div style={{ width: "20rem", alignSelf: "flex-end" }}>
                <NavIcons />
            </div>
            <ChatBox
                chat={currentChat}
                currentUser={userId}
                setSendMessage={setSendMessage}
                receivedMessage={receivedMessage}
            />
            </div>
        </div>
    );
};
export default Chat;