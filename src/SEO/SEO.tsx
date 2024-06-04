import React from "react";
import { Helmet } from "react-helmet-async";

interface ISEO {
  title: string;
  description: string;
  name: string;
  type: string;
}

const SEO: React.FC<ISEO> = (props) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={props.name} />
      <meta name="twitter:card" content={props.type} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default SEO;
