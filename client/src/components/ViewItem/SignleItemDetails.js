import React from "react";

const SignleItemDetails = ({ match }) => {
  return (
    <div>
      <h2>VIew full item details</h2>
      <hr />
      <h1>Item category: {match.params.categ} page</h1>
      <h1>Item ID: {match.params.id}</h1>
    </div>
  );
};

export default SignleItemDetails;
