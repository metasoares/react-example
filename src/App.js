import logo from './logo.svg';
import './App.css';

import CursorChat from '@yomo/react-cursor-chat';
// Import theme styles
// import '@yomo/react-cursor-chat/dist/apricot-yellow.css';
import '@yomo/react-cursor-chat/dist/draculaColor.css';

function App() {
  return (
    <div className="App">
          <CursorChat
                showLatency
                presenceURL="https://prsc.yomo.dev"
                presenceAuthEndpoint="/.netlify/functions/presence-auth"
                room="cursor-chat-example"
                name="name"
            />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
