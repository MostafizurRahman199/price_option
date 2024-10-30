import "./App.css";

import { FooterComponent } from "./Components/Footer/FooterComponent";
import Navbar from "./Components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <div className="">
      <Navbar />
     {
      navigation.state === "loading" ? (<div className="flex justify-center mt-20">
      <span className="loading loading-ring loading-lg"></span>
      </div>): <Outlet /> 
     }
     <FooterComponent/>
    </div>
  );
}

export default App;
