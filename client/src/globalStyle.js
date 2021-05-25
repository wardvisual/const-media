import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-1: #377DFF;
        --primary-2: #3678F1;
        --primary-3: #F4F8FF;
        --warning: #FFAC05;
        --success-1: #38CB89;
        --success-2: #F5FCF9;
        --danger: #FF5630;
        --light-1: #FFFFFF;
        --light-2: #FAFBFC;
        --light-3: #F5F6F6;
        --dark-1: #3E4755;
        --dark-2: #67748A;
        --dark-3: #A2AAB9;

        --radius: .7rem;
        --transition: all ease-in-out 0.5s;
        --weight-1: 300;
        --weight-2: 400;
        --weight-3: 800;
        --size-1: 1.8rem;
        --size-2: .9rem;
        --size-3: .7rem;
        --shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

        
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
        text-decoration: none;
    }

    body {
        scroll-behavior: smooth;
        background: var(--light-1);
        color: var(--dark-3);
    }
      
    hr {
        opacity: 0.12;
    }


    p {
      font-weight: calc(var(--weight-2) / var(--weight-3));
    }

    input, button, select, textarea{
      background-color: var(--light-2);
      border: none;
      outline: none;
      padding: 1rem;
      width: 100%;
    }

    button{
      background-color: var(--primary-1);
      color: var(--light-2); 
      font-size: var(--size-2);
      text-align:center;
      border-radius: 1rem;
      
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: .3rem;
    }

    button:hover{
      background-color: var(--primary-2);
      transition: var(--transition);
      cursor: pointer;
    }
    
    button.button-light{
      background-color: var(--light-2);
      color: var(--dark-1)
    }
    
    button.button-light:hover{
      background-color: var(--light-3);
    }

    ul, li {
        list-style: none;
    }

    img {
      border-radius: var(--radius);
      width: 100%;
    }

    span {
        color: var(--primary-1);
    }
  
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--primary-1);
`;

export const Margin = `
  @media screen and (max-width: 375px) {
    margin: 0 1rem 0 1rem;
  }

  @media screen and (min-width: 376px) and (max-width: 750px) {
    margin: 0 1rem 0 1rem;
  }

  @media screen and (min-width: 751px) and (max-width: 1115px) {
    margin: 0 3rem 0 3rem;
  }

  @media screen and (min-width: 1116px) {
    margin: 0 1rem 0 1rem;
  }
`;

export const iconStyle = (width, color, maxWidth, minWidth, custom) => {
  return {
    width: `${width}rem`,
    color,
    maxWidth: `${maxWidth}rem`,
    minWidth: `${minWidth}rem`,
    cursor: "pointer",
    ...custom,
  };
};

export const layout = (layout, justify, align) => {
  return `
    display: ${layout};
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export const mediaScreen = () => {
  const screen = {
    sm: (style) => `
      @media screen and (max-width: 375px) {
        ${style}
      }
    `,
    md: (style) => `
      @media screen and (min-width: 376px) and (max-width: 750px) {
        ${style}
      }
    `,
    lg: (style) => `
      @media screen and (min-width: 751px) and (max-width: 1115px) {
        ${style}
      }
    `,
    xl: (style) => `
      @media screen and (min-width: 1116px) {
        ${style}
      }
    `,
  };
  return {
    ...screen,
  };
};

export default GlobalStyle;
