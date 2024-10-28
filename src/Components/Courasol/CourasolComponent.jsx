import React from "react";
import "@egjs/flicking/dist/flicking.css";
import Flicking from "@egjs/react-flicking";
import "./courasol.css";

export default function CourasolComponent() {
  return (
    <div className="relative w-full overflow-hidden py-8 ">
      <Flicking
        viewportTag="div"
        cameraTag="div"
        align="center"
        horizontal={true}
        circular={true}
        className="h-64" // Adjust height as needed
        onMove={(event) => {
          console.log("Moved to panel index:", event.index);
        }}
        onWillChange={(event) => {
          console.log("Will change to panel index:", event.index);
        }}
      >
   
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6">
                "Every drop of sweat is a step closer to sculpting the masterpiece that is my body."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6">
                "In the sanctuary of the gym, I forge resilience, sculpt strength, and embrace the grind."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "With each rep, I am not just lifting weights; I am lifting my spirit and chasing my potential."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "The gym is my canvas, and every workout is a stroke of determination and dedication."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "I don’t just lift; I elevate my mindset, one set at a time."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "Fueled by ambition and powered by passion, I transform challenges into triumphs within these walls."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "Every workout is a celebration of what my body can achieve; it’s a symphony of strength and endurance."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "I come to the gym not to escape life, but to embrace the power of transformation."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "In the realm of fitness, I am the architect of my own destiny, building strength brick by brick."
            </h1>
        </div>
        <div class="panel flex justify-center items-center w-full p-4 bg-gray-200">
            <h1 class="text-7xl font-bold text-center text-gray-800 p-6 ">
                "As the weights rise, so do I, forging my path to greatness with grit and grace."
            </h1>
        </div>
   
      </Flicking>
    </div>
  );
}
