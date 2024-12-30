import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductListing({
  products,
  numberOfCards,
  numberOfColumns,
  sortOption,
}) {
  const [randomProducts, setRandomProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  useEffect(() => {
    const getRandomProduct = (products) => {
      const randomIndex = Math.floor(Math.random() * products.length);
      return products[randomIndex];
    };

    const randomSelection = Array.from({ length: numberOfCards }, () =>
      getRandomProduct(products)
    );
    setRandomProducts(randomSelection);
  }, [products, numberOfCards]);

  useEffect(() => {
    let sorted = [...randomProducts];

    if (sortOption !== "") {
      sorted.sort((a, b) => {
        const priceA = a.hasDiscount ? a.priceDiscount : a.price;
        const priceB = b.hasDiscount ? b.priceDiscount : b.price;
        if (sortOption === "highest") {
          return priceB - priceA;
        } else if (sortOption === "lowest") {
          return priceA - priceB;
        }
        return 0;
      });
    }

    setSortedProducts(sorted); 
  }, [sortOption]);
  const displayProducts = sortedProducts.length > 0 ? sortedProducts : randomProducts;
  
  return (
    <div className="row">
      {displayProducts.map((product, index) => (
        <Link to={"/product/1"}
          key={index}
          className={`col-lg-${numberOfColumns} col-md-4 col-6 px-2`}
          style={{textDecoration:"none"}}
        >
          <ProductCard
            name={product.name}
            image={product.image}
            hasDiscount={product.hasDiscount}
            discount={product.discount}
            category={product.category}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        </Link>
      ))}
    </div>
  );
}
