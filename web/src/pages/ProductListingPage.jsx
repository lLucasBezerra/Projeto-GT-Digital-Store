import ProductListing from "../components/LayoutComponents/ProductListing";
import Section from "../components/LayoutComponents/Section";
import "../styles/productListing.css";
import { Products } from "../components/ProductData";
import { useState } from "react";
import FilterGroup from "../components/ProductListingComponents/FilterGroup";
export default function ProductListingPage() {
  const [selectedValue, setSelectedValue] = useState("")

  const categoryGroup = [
    {"text": "Tênis Casual","value": "casual"},
    {"text": "sapatenis","value": "sapatenis"},
    {"text": "Tênis esportivo","value": "esportivo"},
    {"text": "Tênis Streetwear","value": "Streetwear"},
  ]
  const markGroup = [
    {"text": "Adiddas","value": "Adiddas"},
    {"text": "Calenciaga","value": "Calenciaga"},
    {"text": "K-Swiss","value": "K-Swiss"},
    {"text": "Nike","value": "Nike"},
    {"text": "Puma","value": "Puma"},
  ]
  const genderGroup = [
    {"text": "Feminido","value": "F"},
    {"text": "Masculino","value": "M"},
    {"text": "Unissex","value": "U"},
    
  ]
  return (
    <main className="listing-page d-flex flex-direction-column justify-content-center">
      <div className="container row">
        <div className="col-md-3 col-12 py-4 d-flex flex-column gap-4">
        <div>
          <h6 className="h6">Ordenar Por</h6>
          <select value={selectedValue} name="price-filter" className="price-filter" onChange={(e) => {setSelectedValue(e.target.value), console.log(selectedValue)}}>
            <option value="">
              Selecione uma Opção
            </option>
            <option value="lowest">Preço: Menor Preço</option>
            <option value="highest">Preço: Maior Preço</option>
          </select>
          </div>
          <div>
          <h5 className="h5">Filtrar Por</h5>
          <hr />
            <FilterGroup title={"categoria"} options={categoryGroup}/>
            <FilterGroup title={"Marca"} options={markGroup}/>
            <FilterGroup title={"Gênero"} options={genderGroup}/>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <Section title="18 Produtos encontrados">
            <ProductListing
              products={Products}
              numberOfColumns={4}
              numberOfCards={18}
              sortOption={selectedValue}
            />
          </Section>
        </div>
      </div>
    </main>
  );
}
