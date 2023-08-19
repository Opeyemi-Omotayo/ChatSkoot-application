import './App.css';
import { ChatEngine } from "react-chat-engine";

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
      />
    </div>
  );
}

export default App;
