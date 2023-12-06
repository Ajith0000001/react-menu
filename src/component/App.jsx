import React from "react";
import Menu from "./menu";

const App = () => {
  return (
    <main className="w-screen h-full bg-white  flex justify-center items-center">
      <section className="w-[1170px]   mx-auto my-7">
        <div className="text-center ">
          <h2 className="text-[2rem] capitalize  ">menu list</h2>
          <div className="w-[5rem] h-[3px]  bg-sky-500 mb-4 mx-auto"></div>
        </div>

        <Menu />
      </section>
    </main>
  );
};
export default App;
