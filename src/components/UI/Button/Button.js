// import styled from "styled-components";
import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #36a5ad;
//   color: white;
//   background: #36a5ad;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #36a5ad;
//     border-color: #36a5ad;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

export default Button;
