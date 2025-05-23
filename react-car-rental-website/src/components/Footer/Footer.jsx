import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#", // Giữ nguyên hoặc trỏ đến trang chính sách thực tế
    display: "Privacy Policy",
  },

  {
    path: "/machines", // Đã đổi path
    display: "Machine Listing", // Đã đổi display text
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-tools-line"></i> {/* Đã đổi icon */}
                  <span>
                    Rent Machine <br /> Service {/* Đã đổi text */}
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              {/* Đã đổi mô tả */}
              Cung cấp giải pháp cho thuê máy móc thiết bị xây dựng uy tín, chất lượng với đa dạng chủng loại, đáp ứng mọi nhu cầu công trình của bạn.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              {/* Lưu ý: Cần cập nhật thông tin liên hệ thực tế ở đây */}
              <p className="office__info">123 Đường ABC, Quận XYZ, TP HCM</p>
              <p className="office__info">Phone: 09xxxxxxxx</p>
              <p className="office__info">Email: info@rentmachine.com</p>
              <p className="office__info">Office Time: 8am - 5pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Đăng ký nhận bản tin</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;