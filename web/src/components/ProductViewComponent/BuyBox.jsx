import { FilledStar, Star, WhiteStar } from "./StarIcons";
import "../../styles/buyBox.css";
import ProductOptions from "./ProductOptions";
export default function BuyBox(props) {
  const optionSquare = [
    "39","40", "41","42", "43"
  ]
  const optionCircle = [
    "#6FEEFF","#FF6969", "#5E5E5E","#6D70B7"
  ]
  const totalStars = 5;
  return (
    <div>
      <h2>{props.name}</h2>
      <span className="details">
        {props.category} | {props.mark} | REF:{props.reference}
      </span>
      <div className="d-flex gap-3">
        <div className="d-flex gap-1">
          {Array.from({ length: totalStars }, (_, index) =>
            index < props.star ? (
              <div key={index}>
                <FilledStar />
              </div>
            ) : (
              <div key={index}>
                <Star />
              </div>
            )
          )}
        </div>
        <span className="star-span">
          {props.star} <WhiteStar />
        </span>{" "}
        <span style={{ color: "#8F8F8F", fontSize: 14 }}>
          ({props.raiting}) avaliações
        </span>
      </div>
      <div className="price-wrapper d-flex gap-2 mt-4 align-items-center">
        <p>
          R$ <strong>{props.priceDiscount}</strong>
        </p>
        <span>{props.price}</span>
      </div>
      <div className="product-details">
        <span>Descrição do produto</span>
        <p>
          {props.description}
        </p>
      </div>
      <div className="product-options">
        <ProductOptions shape={"square"} options={optionSquare} radius={4}/>
        <ProductOptions shape={"circle"} options={optionCircle}/>
      </div>
      <button className="buy-button">COMPRAR</button>
    </div>
  );
}
