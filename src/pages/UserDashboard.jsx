import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Dashboard.css";
export default function UserDashboard() {
  return (
    <div>
      <div className="container">
        <div className="Cards">
          <Card>
            <Card.Body className="carditem">
              <Card.Title>Flipkart</Card.Title>
              <Button variant="primary">Subscribe</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="carditem">
              <Card.Title>Flipkart</Card.Title>
              <Button variant="primary">Subscribe</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="carditem">
              <Card.Title>Flipkart</Card.Title>
              <Button variant="primary">Subscribe</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
