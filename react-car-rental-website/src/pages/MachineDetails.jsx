import React, { useEffect } from "react";
import machineData from "../assets/data/machineData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import NotFound from "./NotFound"; 

const MachineDetails = () => {
  const { id } = useParams(); 

  
  const singleMachineItem = machineData.find((item) => item.id === Number(id));

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [singleMachineItem]);

  
  if (!singleMachineItem) {
    return <NotFound />; 
  }

  return (
   
    <Helmet title={singleMachineItem.machineName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              {/* Hiển thị ảnh và alt text */}
              <img src={singleMachineItem.imgUrl} alt={singleMachineItem.machineName} className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info"> {/* Giữ className này hoặc đổi thành machine__info nếu muốn */}
                {/* Hiển thị tên máy móc */}
                <h2 className="section__title">{singleMachineItem.machineName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {/* Hiển thị giá và đơn vị giá */}
                    {singleMachineItem.rentalRate?.toLocaleString('vi-VN') || 'Liên hệ'} / {singleMachineItem.rateUnit || 'ngày'}
                  </h6>

                  {/* Giữ lại phần hiển thị rating */}
                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleMachineItem.rating} ratings)
                  </span>
                </div>

                {/* Hiển thị mô tả */}
                <p className="section__description">
                  {singleMachineItem.description}
                </p>

                {/* Hiển thị thông tin chi tiết máy móc */}
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem", flexWrap: "wrap" }} // Thêm flexWrap để xuống dòng nếu cần
                >
                  <span className=" d-flex align-items-center gap-1 section__description mb-2"> {/* Thêm mb-2 */}
                    <i className="ri-building-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleMachineItem.manufacturer || 'N/A'}
                  </span>
                  <span className=" d-flex align-items-center gap-1 section__description mb-2"> {/* Thêm mb-2 */}
                    <i className="ri-tools-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleMachineItem.model || 'N/A'}
                  </span>
                   <span className=" d-flex align-items-center gap-1 section__description mb-2"> {/* Thêm mb-2 */}
                     <i className="ri-list-check" style={{ color: "#f9a826" }}></i>{" "}
                     {singleMachineItem.category || 'N/A'}
                   </span>
                  <span className=" d-flex align-items-center gap-1 section__description mb-2"> {/* Thêm mb-2 */}
                     <i className="ri-scales-3-line" style={{ color: "#f9a826" }}></i>{" "}
                     {singleMachineItem.capacity || 'N/A'}
                   </span>
                   <span className=" d-flex align-items-center gap-1 section__description mb-2"> {/* Thêm mb-2 */}
                     <i className="ri-scales-2-line" style={{ color: "#f9a826" }}></i>{" "}
                     {singleMachineItem.weight || 'N/A'}
                   </span>
                </div>
              </div>
            </Col>

            {/* Giữ lại phần BookingForm và PaymentMethod */}
            {/* Cân nhắc xem BookingForm có cần nhận prop là singleMachineItem không */}
            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};


export default MachineDetails;