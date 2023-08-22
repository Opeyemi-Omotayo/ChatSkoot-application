import './App.css';
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/chatFeed/ChatFeed';
import LoginForm from './components/authentication/LoginForm';

const projectID = process.env.REACT_APP_PROJECT_ID
const userSecret = process.env.REACT_APP_USERSECRET

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine 
          height = "100vh"
          projectID = {projectID} 
          userName = {localStorage.getItem('username')}
          userSecret = {localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

      />
    </div>
  );
}

export default App;
