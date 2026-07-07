import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import AIChat from "./components/AIChat";
import StatusBar from "./components/StatusBar";

import "./styles/layout.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="workspace">
        <Sidebar />

        <Editor />

        <AIChat />
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
