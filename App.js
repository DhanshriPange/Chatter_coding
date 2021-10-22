import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';

import './App.css';



const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

    return (
      <ChatEngine
        height="100vh"
        projectID="e5fa0a20-a36c-49a7-86d5-7a2ccbe9ddea"
        userName="DHANSHRI PANGE"
        userSecret="123123"
        // Event Hooks Here
        onConnect={(creds) => console.log(creds)}
        onFailAuth={(props) => console.log(props)}
        onNewChat={(chat) => console.log(chat)}
        onEditChat={(chat) => console.log(chat)}
        onDeleteChat={(chat) => console.log(chat)}
        onEditMessage={(chatId, message) => console.log(chatId, message)}
        onDeleteMessage={(chatId, message) => console.log(chatId, message)}
        onGetChats={(chatId, message) => console.log(chatId, message)}
        onGetMessages={(chatId, message) => console.log(chatId, message)}
        onTyping={(chatId, message) => console.log(chatId, message)}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };


  export default App;