import React, {useEffect, useState} from "react";
import { getUser } from "../../api";
import { useDispatch } from "react-redux";
import profile from '../../images/defaultProfile.png';

const Conversation = ({data, currentUser, online}) => {
    const [userData, setUserData] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const userId = data.members.find((id) => id!==currentUser)
        const getUserData = async() =>{
            try{
                const {data} = await getUser(userId);
                setUserData(data);
            }
            catch(error)
            {
                console.log(error);
            }
            
        }
        getUserData();
    }, [])
    return(
        <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={profile}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.name}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
    );
};
export default Conversation;