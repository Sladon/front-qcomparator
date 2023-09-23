import React from "react";
import "./style.css";

export const Frame = () => {
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
          <img className="google-svgrepo-com" alt="Google svgrepo com" src="/img/google-svgrepo-com-1.svg" />
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-6">Registrar/Entrar</div>
        </div>
      </div>
    </div>
  );
};
