import React from 'react';

import './Page.css';

import Header from './../header/Header';

const Page = (props) => (
  <div className="Page">
    <Header title={props.title}/>

    <main className="Page-Content">
      {props.children}
    </main>
  </div>
);

export default Page;
