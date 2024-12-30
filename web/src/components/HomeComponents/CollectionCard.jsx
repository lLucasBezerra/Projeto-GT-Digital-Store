import "../../styles/colectionCard.css";

export default function CollectionCard({discount, image}) {
  return (
    <div className="col-lg-3 col-12 img-wrapper">
      <div>
      <img src={image} alt="" width={338} height={212}/>
      <button className="py-2 px-4 rounded">Comprar</button>
      {discount && (<span>{discount} off</span>)}
      </div>
    </div>
  );
}
