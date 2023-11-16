import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Components/styles.css";

function Footer() {
  return (
    <Container className="footer-container">
      <Row>
        <Col>
          <table>
            <tr>
              <th>Learning</th>
              <th>More From us</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Presentations</li>
                  <li>Character building</li>
                  <li>Comprehension</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Location</li>
                  <li>Phone: +91: 1234567890</li>
                  <li>Contact: +91: 1234567891</li>
                </ul>
              </td>
            </tr>
          </table>
        </Col>
        <Col>
          <form className="footer-form">
            <label for="email">Email</label>
            <input type="email" id="email" />
            <label for="description">Description</label>
            <textarea id="description">Enter your query</textarea>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
