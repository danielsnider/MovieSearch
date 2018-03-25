import React, { Component } from 'react';
import { DataSearch } from '@appbaseio/reactivesearch';

class Navbar extends Component{
  render(){
    return(
      <div className="navbar">

              <div className="logo-container" >
                    <img  className="app-logo" src="Images/logo.jpg" alt="MovieSearch"/>
              </div>

              <div className="search-container">

                          <DataSearch
                          componentId="mainSearch"
                          dataField={["title"]}
                          categoryField="title"
                          className="search-bar"
                          queryFormat="and"
                          placeholder="Search a movie..."
                          iconPosition="left"
                          autosuggest={false}
                          filterLabel="search"
                          />
               </div>
      </div>
);
  }
}
export default Navbar;
