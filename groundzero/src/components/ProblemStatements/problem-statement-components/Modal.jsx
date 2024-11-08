import React, { useEffect, useState } from "react";
import { problems, reasons } from "../../../constants/index";
import { IoClose } from "react-icons/io5";

import MediaQuery from "react-responsive";

const Modal = (props) => {
  return (
    <div
      onClick={() => props.setModalIsOpen(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.8)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <MediaQuery minWidth={768}>
        <div onClick={(e) => e.stopPropagation()} className="popup-content">
          <div className="popup-content-inner">
            <div className="popup-image">
              <img src={props.data.img} />
            </div>
            <div className="popup-right">
              <div className="popup-heading">{props.data.title}</div>
              <div className="popup-description">{props.data.details1}</div>
            </div>
            <IoClose
              className="popup-close-button"
              onClick={() => props.setModalIsOpen(false)}
            />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div onClick={(e) => e.stopPropagation()} className="popup-content">
          <div className="popup-content-inner-small">
            <div className="popup-right">
              <div className="popup-heading">{props.data.title}</div>
              <div className="popup-description-small">
                {props.data.details1}
              </div>
              <div className="popup-description-small">Problem statements:</div>
              <div className="popup-description-small">
                {props.data.probstatements.map((statement) => {
                  return (
                    <p className="popup-descriptions-small" key={statement}>
                      {statement}
                    </p>
                  );
                })}
              </div>
            </div>
            <IoClose
              className="popup-close-button"
              onClick={() => props.setModalIsOpen(false)}
            />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Modal;
