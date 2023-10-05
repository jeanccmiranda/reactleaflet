import React from "react";

const MarkerDetails = ({toggleVisible}) => {
  return (
      <div className="marker_details">
        <button className="btn_close" onClick={toggleVisible}>
          Fechar
        </button>
      </div>
  );
};

export default MarkerDetails;
