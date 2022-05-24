import styled from 'styled-components';

const background = "#000000";


export const Content = styled.div`
    display: grid;
    grid-template-areas:
    'menu header'
    'menu main'
    grid-gap: 10px;
   height: 100vh;
   padding: 0; 
   background-color: ${background};
   background-image: linear-gradient(135deg, #000000 0%, #1b4cff 100%);
`;

export const Main = styled.main`
    grid-area:main;
    padding: 12px;
    font-size:18px;
    width:80vw;
    margin-top: 10vh;
    margin-left:20vw;
`;

export const Header = styled.div`
    grid-area:header;
    text-align: center;
    font-size: 20px;
    height: 10vh;
    width: 80vw;
    margin-left:20vw;
    text-transform: uppercase; 
    letter-spacing: 10px;
    background-color: black;
    color:white;
    align-items:middle;
`;

export const Logo = styled.div`
   text-align: center;
   font-size: 20px;
   align-center;
   padding:20px;
`;

export const Nav  = styled.nav`
    width:20vw;
    grid-area:menu;
    overflow-y: scroll;
        background-image: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);
    color:white;
`;

export const Footer = styled.div`
    text-align: center;
    font-size: 20px;
    background-color:burlywood;
    align-self:flex-end;
`;

export const Button = styled.button`
  padding: 5px 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: green;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  height: 7vh;
  width:70vw;
  &:hover{
      background-color: red;
  }
`;