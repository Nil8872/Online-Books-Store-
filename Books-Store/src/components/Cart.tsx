import React from 'react';
import "../index.css";
import styles from "../styles/cart.module.css";


// type CardDetails = string;



const Cart :  React.FC <{cartDetails:string}>= ({cartDetails}) =>{

// console.log(cardDetails);
  return (
    <>
      <div className={styles.card}>
              <div className={styles.imageBox}>
                <img src={cartDetails} alt="Loading" height={"100%"} width={"100%"} />
              </div>
              <div className={styles.cardContent}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <div>Campus Sutra</div>
                  <div>500</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "var(--red)",
                    marginBottom: "15px",
                  }}
                >
                  <div>Cart item name</div>
                  <div>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#414141",
                      }}
                    >
                      1000
                    </span>{" "}
                    50% off
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <button
                      className="btn"
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "2px",
                      }}
                    >
                      -
                    </button>
                    <button
                      className="btn"
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "2px",
                        margin: "0px 10px",
                      }}
                    >
                      1
                    </button>
                    <button
                      className="btn"
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "2px",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div style={{ color: "var(--red)" }}>Remove</div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Cart
