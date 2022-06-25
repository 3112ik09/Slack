import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/Info';
import db from './Firebase';
import Messages from './Messages';
function Chat() {
    const {roomId} = useParams();
    const [roomDetails , setroomDetails] = useState();
    const [roomMessages , setroomMessages] = useState([]);
    useEffect(() =>{
      if(roomId){
        db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot)=>setroomDetails(snapshot.data()))

        db.collection('rooms')
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp" ,"asc")
        .onSnapshot((snapshot)=> setroomMessages(snapshot.docs.map(doc =>doc.data())));
      }
    },[roomId])
    console.log(roomMessages);
  return (
    <div className='chat'>
        <div className='chat__header'>
            <div className='chat__headerLeft'>
              <h4 className='chat__channelName'>
                <strong>#{roomDetails?.name}</strong>
                <StarBorderIcon/>
              </h4>

            </div>

            <div className='chat__headerRight'>
              <p>
                <InfoOutlinedIcon/>Details
              </p>
            </div>
        </div>

        <div className='chat__messages'>
          {/* CHat messages */}
          {
            roomMessages.map(({message , timestamp , user , userImage}) =>(
              <Messages
              key={timestamp}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Chat