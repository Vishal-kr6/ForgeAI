function WelcomeScreen() {
  return (
    <div className="editor-body">
      <h2>Welcome to ForgeAI 🚀</h2>

      <p>
        Open a folder to start coding.
      </p>

      <div className="welcome-actions">
        <button>📂 Open Folder</button>

        <button>📄 New File</button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
