import Logo from "./Logo";
import Search from "../../assets/Search.svg";
import ShowSearch from "../ShowSearch";
import Menu from "../../assets/Menu.svg";
import MiniCart from "../../assets/mini-cart.svg";
import "../../styles/header.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    // desktop
    <>
      <header className="pt-5 container desktop">
        <div className="row gap-2">
          <div className="col-3">
            <Logo isLight={true} isDesktop={true} />
          </div>
          <div className="row col-5">
            <input
              type="text"
              className="col-11 search-input"
              placeholder="Pesquisar produto..."
            />

            <button
              className="search-btn col-1 d-flex jutify-content-center align-items-center"
              type="button"
            >
              <img src={Search} alt="" />
            </button>
          </div>
          <div className="col-3 d-flex justify-content-around">
          <Link to={"/login"} className="d-flex align-items-center">
            <p>Cadastre-se</p>
          </Link>
          <button className=" login-btn text-white px-3 py-2">Entrar</button>
          </div>
          <div className="col-1 d-flex align-items-center justify-content-center">
            <div className="cart-img">
            <img
              src={MiniCart}
              
              alt="Icone de carrinho de compras"
              width={24}
              height={24}
            /></div>
          </div>
        </div>
        <nav className="desktop-nav mt-5">
          <ul className="d-flex gap-2">
            <li className={isActive("/") ? "active px-1" : "px-1"}>
              <Link to="/">Home</Link>
            </li>
            <li className={isActive("/products") ? "active px-1" : "px-1"}>
              <Link to="/products">Produtos</Link>
            </li>
            <li className={isActive("/category") ? "active px-1" : "px-1"}>
              <Link to="/">Categorias</Link>
            </li>
            <li className={isActive("/cart") ? "active px-1" : "px-1"}>
              <Link to="/">Meus Pedidos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className="p-3 container-fluid mobile">
        <div className="d-flex justify-content-between">
          <button className="menu" onClick={() => setShowMenu(!showMenu)}>
            <img src={Menu} alt="botão de menu" width={24} />
          </button>
          <div className={`${showMenu ? "d-block" : "d-none"} mobile-nav-wrapper w-100`} style={{zIndex: 10000}}>
          <div className="mobile-nav w-75">
            <nav>
              <ul className="d-flex flex-column gap-2">
                <h6 className="mb-3">Páginas</h6>
                <li className={isActive("/") ? "active px-1" : "px-1"}>
                  <Link to="/">Home</Link>
                </li>
                <li className={isActive("/products") ? "active px-1" : "px-1"}>
                  <Link to="/products">Produtos</Link>
                </li>
                <li className={isActive("/category") ? "active px-1" : "px-1"}>
                  <Link to="/">Categorias</Link>
                </li>
                <li className={isActive("/cart") ? "active px-1" : "px-1"}>
                  <Link to="/">Meus Pedidos</Link>
                </li>
              </ul>
            </nav>
            <div className="login-area p-3 mt-5">
              <hr />
              <div className="d-flex gap-4">
                <button className="login-btn text-white">Entrar</button>
                <Link to={"/login"} className="d-flex align-items-center">
                  <p>Cadastre-se</p>
                </Link>
              </div>
            </div>
          </div>
          </div>
          <div>
            <Logo isLight={true} isDesktop={false} />
          </div>
          <div className="d-flex gap-1">
            <button
              className=" open-search"
              onClick={() => {
                setShowSearch(!showSearch), setOpenSearch(!openSearch);
              }}
            >
              <ShowSearch showSearch={showSearch} />
            </button>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={MiniCart}
                alt="Icone de carrinho de compras"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        {openSearch && (
          <div className="row search-wrapper p-4">
            <input
              type="text"
              className="col-10 search-input p-2"
              placeholder="Pesquisar produto..."
            />

            <button
              className="search-btn col-2 d-flex jutify-content-center align-items-center"
              type="button"
            >
              <img src={Search} alt="" />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
