import React from "react";

export default function Title({ name, title }) {
  return (
    <div style={{padding:"20px 0 0 0"}} className="row">
      <div className="col-12 mx-auto my-2 ">
        <h2 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h2>
      </div>
    </div>
  );
}
