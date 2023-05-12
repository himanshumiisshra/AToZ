import React from "react";
import { Helmet } from "react-helmet";

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "Welcome To AToZ",
  keywords: "electronics, buy electronics, cheap electronics",
  description: "We Sell the best products at cheap prices",
};

export default Meta;