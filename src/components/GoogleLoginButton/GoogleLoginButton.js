import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const responseGoogle = (response) => {
    if (response.profileObj) {
      // Autenticación exitosa
      onSuccess(response.profileObj);
    } else {
      // Autenticación fallida
      onFailure();
    }
  };

  const handleFailure = () => {
    // Lógica para manejar la autenticación fallida
    console.log("Autenticación fallida");
  };

  return (
    <GoogleLogin
      clientId="180978105178-irpmua5dn1dntjaoslr32jdfd3g66p84.apps.googleusercontent.com"
      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
