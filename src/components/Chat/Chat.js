import React, {useState, useEffect} from 'react';
import './Chat.css';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

const Chat = () =>{
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);
    const userId = user?.result.googleId || user?.result?._id;
    const [chats, setChats] = useState([]);

    /*/ Get the chat in chat section
    useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(userId);
        //setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
    }, [userId]);*/

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
                    Conversations
                </div>
                </div>
            </div>

            {/*  Right Side */}
            <div className="Right-side-chat">Right Side
            </div>
        </div>
    );
};
export default Chat;