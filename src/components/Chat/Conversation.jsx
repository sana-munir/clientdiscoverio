import React, { useEffect, useState } from "react";
import { getUser } from "../../api";
import profile from '../../images/defaultProfile.png';
import "./ChatBox.css";
import { Typography } from "@mui/material";

const Conversation = ({ data, currentUser, online }) => {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUser);
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, [data, currentUser]);

    return (
        <>
            <div className="follower conversation">
                <div>
                    {online && <div className="online-dot"></div>}
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
                    <span style={{ color: online ? "#51e200" : "" }}></span>
                    </div>
                </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </>
    );
};

export default Conversation;
