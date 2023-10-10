import React from "react";
import "./style.css";
import { SearchItem } from "../../components/SearchItem/SearchItem";
import { Comparar } from "../../components/Comparar/Comparar";
import { Locales } from "../../components/Locales/Locales";
import { Local } from "../../components/Local/Local";

export const Frame = () => {
  return (
    <Local />
  );
};

export const Frames = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="text-wrapper">Bienvenido.</div>
        <div className="div-2">
          <div className="overlap-group" />
          <div className="overlap">
            <div className="button" />
            <img className="compare" alt="Compare" src="/img/compare-1.svg" />
          </div>
          <div className="overlap-2" />
        </div>
        <div className="div-3">
          <div className="overlap-3">
            <div className="text-wrapper-2">Ingrese email</div>
            <img className="mail" alt="Mail" src="/img/mail-142-1.svg" />
          </div>
          <div className="text-wrapper-3">Email</div>
        </div>
        <div className="div-4">
          <div className="overlap-3">
            <div className="text-wrapper-2">Contraseña</div>
            <img className="lock-svgrepo-com" alt="Lock svgrepo com" src="/img/lock-svgrepo-com-1.svg" />
            <img className="hide-svgrepo-com" alt="Hide svgrepo com" src="/img/hide-svgrepo-com-1.svg" />
          </div>
          <div className="text-wrapper-4">Contraseña</div>
        </div>
        <div className="div-5">
          <div className="text-wrapper-5">O ENTRE CON</div>
          <a href="https://www.google.com"> {/* Add your desired URL here */}
            <img className="google-svgrepo-com" alt="Google svgrepo com" src="/img/google-svgrepo-com-1.svg" />
          </a>
        </div>
          <div className="div-wrapper">
           <button className="custom-button">Registrar/Entrar</button>
          </div>
      </div>
    </div>
  );
};
