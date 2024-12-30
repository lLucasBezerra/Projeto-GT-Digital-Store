import "../styles/homePage.css"
import Section from "../components/LayoutComponents/Section";
import Gallery from "../components/LayoutComponents/Gallery";
import CollectionCard from "../components/HomeComponents/CollectionCard";
import CollectionSelector from "../components/HomeComponents/CollectionSelector";
import { Products } from "../components/ProductData";

import {
  CamisaIcon,
  BoneIcon,
  TenisIcon,
  FoneIcon,
  CalcaIcon,
} from "../components/HomeComponents/CollectionIcons";
import ProductListing from "../components/LayoutComponents/ProductListing";

export default function HomePage() {
  const homeImage = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
    { src: "/home-slide-6.jpeg" },
    { src: "/home-slide-7.jpeg" },
    { src: "/home-slide-8.jpeg" },
  ];
  return (
    <div>
      <Gallery images={homeImage} />
      <Section title={"Coleções em destaque"} titleAlign="left">
        <div className="row gap-4 align-item-center justify-content-center">
          <CollectionCard image={"/collection-1.png"} discount={"30%"} />
          <CollectionCard image={"/collection-2.png"} discount={"30%"} />
          <CollectionCard image={"/collection-3.png"} discount={"30%"} />
        </div>
      </Section>
      <Section title={"Coleções em destaque"} titleAlign="center">
        <div className="container collection-section">
          <CollectionSelector icon={<CamisaIcon />} name={"Camisetas"} />
          <CollectionSelector icon={<CalcaIcon />} name={"Calças"} />
          <CollectionSelector icon={<BoneIcon />} name={"Bonés"} />
          <CollectionSelector icon={<FoneIcon />} name={"Headphones"} />
          <CollectionSelector icon={<TenisIcon />} name={"Tênis"} />
        </div>
      </Section>
      <Section
        title={"Produtos em Alta"}
        link={{ href: "products", text: "Ver todos" }}
        titleAlign="left"
      >
        <ProductListing products={Products} numberOfCards={8} numberOfColumns={3}/>
      </Section>
      <section className="container row offer-section">
        <div className="col-lg-6 imgs-wrapper">
          <img className="background-img" src="/Ellipse.png" alt="background da imagem" />
          <img className="front-img" src="/home-image.png" alt="imagem de um jordan amarelo" />
        </div>
        <div className="col-lg-6">
          <div className="offer-text-wrapper">
            <span>Oferta especial</span>
            <h1>Air Jordan edição de colecionador</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <button>Ver Oferta</button>
          </div>
        </div>

      </section>
    </div>
  );
}
