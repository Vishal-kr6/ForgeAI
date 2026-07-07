import FolderItem from "./FolderItem";

const folders = [
  "frontend",
  "backend",
  "docs",
];

function Explorer() {
  return (
    <aside className="sidebar">
      <h3>Explorer</h3>

      <div className="tree">
        {folders.map((folder) => (
          <FolderItem
            key={folder}
            name={folder}
          />
        ))}
      </div>
    </aside>
  );
}

export default Explorer;
