import React from "react";
import ReactDOM from "react-dom/client";
import FoodMenu from "./data.js";

import Swal from "sweetalert2/dist/sweetalert2.js";

// import css
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Warung Dahar Ujang</h1>
    </div>
  );
}

function Menu() {
  // const foods = [];
  const foods = FoodMenu;
  const numFoods = foods.length;

  // Cara pake if else biasa
  // if (numFoods === 0) {
  //   return (
  //     <div className="menu">
  //       <h2>Menu Dahar</h2>
  //       <p>Menu sedang kosong</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="menu">
  //       <h2>Menu Dahar</h2>
  //       <ul className="food-list">
  //         {foods.map((food, index) => (
  //           <Food key={index} foodObj={food} />
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

  // Cara pake ternary operator
  return (
    <div className="menu">
      <h2>Menu Dahar</h2>
      {numFoods > 0 ? (
        <>
          <p>
            <button
              style={{
                width: "60px",
                height: "30px",
                color: "red",
                borderRadius: "5px",
              }}
              className="orderButton"
              onClick={() =>
                Swal.fire({
                  title: "Order",
                  text: "Silahkan pilih menu yang tersedia",
                  icon: "info",
                })
              }
            >
              Order
            </button>
          </p>
          <ul className="food-list">
            {FoodMenu.map((food, index) => (
              <Food key={index} foodObj={food} />
            ))}
          </ul>
        </>
      ) : (
        <p>Menu sedang kosong</p>
      )}
      {/* <Food
        nama="Spongebob"
        deskripsi="Spongebob dan Villain"
        harga={2500}
        foto="images/strangler.jpg"
        stok={Math.random() > 0.5 ? "Tersedia" : "Habis"}
      />
      <Food
        nama="Smilling"
        deskripsi="Smilling Villain"
        harga={2500}
        foto="images/strangler.jpg"
        stok={Math.random() > 0.5 ? "Tersedia" : "Habis"}
      /> */}
    </div>
  );
}

function Footer() {
  const jam = new Date().getHours();
  const jamBuka = 8;
  const jamTutup = 20;
  const isOpen = jam >= jamBuka && jam < jamTutup;

  // Cara pake if else biasa dengan sweetalert
  // if (jam < jamBuka || jam >= jamTutup) {
  //   Swal.fire({
  //     title: "Warung Dahar Ujang sedang tutup",
  //     icon: "error",
  //   });
  // } else {
  //   Swal.fire({
  //     title: "Warung Dahar Ujang sedang buka",
  //     icon: "success",
  //   });
  // }

  // Cara pake if else biasa
  if (isOpen) {
    return <OpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }

  // Cara pake ternary operator
  // return (
  //   <div className="footer">
  //     <p>
  //       {new Date().getFullYear()} Warung Dahar Ujang || Jam Buka {jamBuka} -
  //       Jam Tutup {jamTutup}
  //     </p>
  //     {/* {new Date().getFullYear()} Warung Dahar Ujang || Jam Buka {jamBuka} -
  //       Jam Tutup {jamTutup} */}
  //   </div>
  // );
}

// Cara pake functional component biasa
function OpenHour(props) {
  return (
    <div className="footer">
      <div className="open">
        <p>
          {new Date().getFullYear()} Warung Dahar Ujang || Jam Buka{" "}
          {props.jamBuka} - Jam Tutup {props.jamTutup}
          <button
            style={{
              marginLeft: "10px",
              width: "5%",
              height: "20px",
              color: "red",
              borderRadius: "5px",
            }}
            className="order"
            onClick={() =>
              Swal.fire({
                title: "Warung Dahar Ujang sedang buka",
                icon: "success",
              })
            }
          >
            Order
          </button>
        </p>
      </div>
    </div>
  );
}

// Cara pake functional component destructuring
function FooterCloseHour({ jamBuka, jamTutup }) {
  return (
    <div className="footer">
      <div className="close">
        <p>
          {new Date().getFullYear()} Warung Dahar Ujang || Jam Buka {jamBuka} -
          Jam Tutup {jamTutup}
          <button
            style={{
              marginLeft: "10px",
              width: "5%",
              height: "20px",
              color: "red",
              borderRadius: "5px",
            }}
            className="order"
            onClick={() =>
              Swal.fire({
                title: "Warung Dahar Ujang sedang tutup",
                icon: "error",
              })
            }
          >
            Order
          </button>
        </p>
      </div>
    </div>
  );
}

// Cara pake class component destructuring (const)
function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  // console.log(props);
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} />
      <div>
        <h2>{nama}</h2>
        <p>{deskripsi}</p>
        {/* <span>Harga: Rp {harga}</span> */}
        <span>{stok ? harga : "Habis"}</span>
      </div>
    </li>
  );
}

// Cara Pertama
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Cara Kedua
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
