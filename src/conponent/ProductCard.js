import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Card
      onClick={showDetail}
      key={item?.id}
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={item?.img} />
      <CardBody>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item?.choice == true ? "Conscious choice" : ""}
        </CardSubtitle>
        <CardTitle tag="h5">{item?.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          \ {item?.price}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item?.new == true ? "신제품" : ""}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
