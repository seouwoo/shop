import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,  Dropdown,DropdownToggle,DropdownMenu,DropdownItem,Button } from 'reactstrap';


function ProductDetail() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let { id } = useParams();
  const [product,setProduct]=useState(null);
  //console.log(id)
  const getProductDetail=async()=>{
    let url=`http://localhost:3004/products/${id}`;
    let response=await fetch(url);
    let data=await response.json();
    console.log(data)
    setProduct(data)
  }
  
  useEffect(()=>{
    getProductDetail()
  },[])//배열애 비어있을때는 함수실행시 한번만 실행됨

  

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return <div className="detail">
    <Container>
      <Row>
        <Col
          className="bg-light border product-img"
          xs="6"
        >
          <img src={product?.img} alt="" />
        </Col>
        <Col
          className="bg-light border product-desc"
          xs="6"
        >
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div className="choice">{product?.choice?"Conscious choice":""}</div>
          <div>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>사이즈</DropdownToggle>
        <DropdownMenu >
          {product?.size.map((item)=>{
            return (<DropdownItem>{item}</DropdownItem>)

          })}
        </DropdownMenu>
      </Dropdown>
      <Button color="danger">
      추가
      </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>;
}


export default ProductDetail;
