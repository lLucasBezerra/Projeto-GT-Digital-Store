import "../../styles/footer.css";
import Logo from "./Logo";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <Logo isDesktop={true} />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <ul className="d-flex gap-3">
              <li>
                <img src={FacebookIcon} alt="icon do Facebook" />
              </li>
              <li>
                <img src={InstagramIcon} alt="icon do instagram" />
              </li>
              <li>
                <img src={TwitterIcon} alt="icon do twitter" />
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-white">
            <h6 className="h6">Informação</h6>
            <ul>
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus pedidos</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2 text-white">
            <h6 className="h6">Categorias</h6>
            <ul>
              <li>Camisetas</li>
              <li>Calça</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 text-white">
            <h6 className="h6">Contato</h6>
            <ul>
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </div>
        <div className="col-12 text-center text-white">
          <hr style={{borderColor: "#fff",}}/>
          @ 2022 Digital College
        </div>
      </div>
    </footer>
  );
}
