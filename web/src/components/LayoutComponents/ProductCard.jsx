import "../../styles/productCard.css";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="card-img-wrapper">
        <img src={props.image} alt={`Imagem do produto ${props.name}`}/>
        {props.hasDiscount == true && (<span>{props.discount} off</span>)}
      </div>
      <div className="text-card p-2">
        <span className="category">{props.category}</span>
        <p>{props.name}</p>
        <div className="d-flex">
            <span className={`price ${props.hasDiscount == true? "discount" : ""}`}>${props.price}</span>
            {props.hasDiscount == true && (<span className="price">${props.priceDiscount}</span>)}
        </div>
      </div>
    </div>
  )
}
