import React from "react";
import "./App.scss";
import "./index.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-P9NWLN5'
}

TagManager.initialize(tagManagerArgs)

declare global {
  interface Window {
    dataLayer:any;
  }
}

function App() {
  let FB = window.dataLayer;
  FB.push({
    event: 'pageview'
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
