type FolderItemProps = {
  name: string;
};

function FolderItem({ name }: FolderItemProps) {
  return (
    <div className="folder-item">
      📁 {name}
    </div>
  );
}

export default FolderItem;
