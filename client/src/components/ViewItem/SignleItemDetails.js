import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ArticleSection from "./ArticleSection";
import AsideSection from "./AsideSection";

const SignleItemDetails = () => {
  return (
    <>
      <Row className='py-3'>
        <Col xs={12} md={8}>
          <ArticleSection />
        </Col>
        <Col xs={12} md={4}>
          <AsideSection />
        </Col>
      </Row>
    </>
  );
};

export default SignleItemDetails;
