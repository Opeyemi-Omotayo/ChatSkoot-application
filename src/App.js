import './App.css';
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/chatFeed/ChatFeed';

const projectID = process.env.REACT_APP_PROJECT_ID
const userSecret = process.env.REACT_APP_USERSECRET

function App() {
  return (
    <div className="App">
      <ChatEngine 
          height = "100vh"
          projectID = {projectID} 
          userName = "Opeyemi"
          userSecret = {userSecret}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

      />
    </div>
  );
}

export default App;
