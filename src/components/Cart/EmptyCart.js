import React from "react";

export default function EmptyCart() {
  return (
    <div style={{padding:"20px 0", color:"red"}} className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center ">
          <h3>You have not added any items to the cart</h3>
        </div>
      </div>
    </div>
  );
}
