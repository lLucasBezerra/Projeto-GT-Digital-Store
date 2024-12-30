import "../../styles/collectionSelector.css"
export default function CollectionSelector({ icon, name }) {
  return (
    <div className="collection-item">
      <div className="icon-wrapper">
        {icon}
      </div>
      <span>{name}</span>
    </div>
  );
}
