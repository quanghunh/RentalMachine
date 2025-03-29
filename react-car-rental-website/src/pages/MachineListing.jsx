import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import MachineItem from "../components/UI/MachineItem";
import machineData from "../assets/data/machineData";

const MachineListing = () => {

  return (
    <Helmet title="Machines">
      <CommonSection title="Machine Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Giá: Thấp đến Cao</option>
                  <option value="high">Giá: Cao đến Thấp</option>
                </select>
              </div>
            </Col>

            {machineData.map((item) => (
              <MachineItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default MachineListing;