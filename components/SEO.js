import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const SEO = (props) => {
  const { title, description, image } = props;
  return (
    <Head>
      <title>{title} | App</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      {/* <meta itemprop="image" content={image} /> */}
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
