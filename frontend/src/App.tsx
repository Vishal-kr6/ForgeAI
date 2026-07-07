import Header from "./components/layout/Header";
import StatusBar from "./components/layout/StatusBar";

import Explorer from "./components/explorer/Explorer";
import Editor from "./components/editor/Editor";
import AIChat from "./components/ai/AIChat";

import "./styles/layout.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="workspace">
        <Explorer />

        <Editor />

        <AIChat />
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
