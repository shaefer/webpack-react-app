import React from "react";
import ReactDOM from "react-dom";
import FormContainer from './js/components/container/FormContainer.jsx';

console.log("hey I started here!");


const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;