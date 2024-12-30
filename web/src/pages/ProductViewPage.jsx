import Gallery from "../components/LayoutComponents/Gallery";
import BuyBox from "../components/ProductViewComponent/BuyBox";
import Section from "../components/LayoutComponents/Section";
import ProductListing from "../components/LayoutComponents/ProductListing";
import { Products } from "../components/ProductData";
export default function ProductViewPage() {
  const images = [
    { src: "/product-thumb-1.jpeg" },
    { src: "/product-thumb-2.jpeg" },
    { src: "/product-thumb-3.jpeg" },
    { src: "/product-thumb-4.jpeg" },
    { src: "/product-thumb-5.jpeg" },
  ];
  return (
    <section style={{ backgroundColor: "#F9F8FE" }} className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <Gallery
              width={700}
              height={570}
              images={images}
              radius={4}
              showThumbs
            />
          </div>
          <div className="col-lg-5">
            <BuyBox
              name={"Tênis Nike Revolution 6 Next Nature Masculino"}
              category={"Casual"}
              mark={"Nike"}
              reference={"38416711"}
              star={4}
              raiting={"180"}
              priceDiscount={"219,00"}
              price={"319,00"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
            />
          </div>
          <Section
            title={"Produtos Relacionados"}
            link={{ href: "", text: "ver todos" }}
          >
            <ProductListing
              numberOfColumns={3}
              numberOfCards={4}
              products={Products}
            />
          </Section>
        </div>
      </div>
    </section>
  );
}
