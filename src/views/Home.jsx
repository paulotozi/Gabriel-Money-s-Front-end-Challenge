import React, { lazy, Component, useState } from "react";
import ProductListView from "./product/List"; 

class HomeView extends Component {

  render() {

    return (
      <React.Fragment>
        <ProductListView></ProductListView>
      </React.Fragment>
    );
  }
}

export default HomeView;
