import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/machine-item.css";

const MachineItem = (props) => {
  const { id, imgUrl, model, machineName, rentalRate, rateUnit, category, capacity, weight } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="machine__item">
        <div className="machine__img">
          <img src={imgUrl} alt={machineName} className="w-100" />
        </div>

        <div className="machine__item-content mt-4">
          <h4 className="section__title text-center">{machineName}</h4>
          <h6 className="rent__price text-center mt-">
            {rentalRate?.toLocaleString('vi-VN') || 'Liên hệ'} <span> / {rateUnit || 'ngày'}</span>
          </h6>

          <div className="machine__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-tools-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-list-check"></i> {category}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-scales-3-line"></i> {capacity}
            </span>
          </div>

          <button className=" w-50 machine__item-btn machine__btn-book">
            <Link to={`/machines/${id}`}>Book Now</Link>
          </button>

          <button className=" w-50 machine__item-btn machine__btn-details">
            <Link to={`/machines/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default MachineItem;