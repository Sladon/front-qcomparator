import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProfilePage from "./components/ProfilePage/Profilepage";
import StoresPage from "./components/StoresPage/StoresPage";
import GoogleLoginButton from "./components/GoogleLoginButton/GoogleLoginButton"
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route exact path="/profile" element={<ProfilePage />} />
                    <Route exact path="/stores" element={<StoresPage />} />
                    <Route exact path="/" element={<GoogleLoginButton />} />
                </Routes>
                <NavigationBar />
            </HashRouter>
        </div>
    );
};

export default App;
