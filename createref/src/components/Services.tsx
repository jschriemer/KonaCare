import React from "react";
declare var require: any;

function importAll(r) {
  return r.keys().map(r);
}

export default function Services() {
  const images = importAll(
    require.context("../images/services", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {images.map((img, i) => {
        return (
            <img
              style={{ width: "20%" }}
              src={img}
              alt={`Image number ${i}`}
            />
        );
      })}
    </div>
  );
}