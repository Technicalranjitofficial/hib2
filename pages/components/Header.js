import Head from "next/head";
import React from "react";

const Header = (props) => {
  const { title } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={props.image} />

        <meta property="og:title" content={props.title} />

        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="article" />
  
        <meta name="twitter:card" content={props.image}></meta>

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </Head>
    </div>
  );
};

export default Header;
