import React from "react";
import "./App.scss";
import "./index.scss"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import Financial from "../src/pages/Financial";
import IoraToken from "../src/pages/IoraToken";
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
        <Route path="/openfinance" element={<Financial />} />
        <Route path="/ioratoken" element={<IoraToken />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
