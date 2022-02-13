import React, { useState } from "react";
import styled from "styled-components";
import CloseButton from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header(props) {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="#home">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
        <a key={index} href={`#${car}`}>{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <RightMenuGroup>
          <a href="#shop">Shop</a>
          <a href="#account">Account</a>
        </RightMenuGroup>
        <MenuBtn onClick={() => setOpen(true)}>Menu</MenuBtn>
      </RightMenu>
      <NavBar open={open}>
        <CloseWrapper>
        <CustomClose onClick={() => setOpen(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
        <li key={index}><a href={`#${car}`}>{car}</a></li>
        ))}
        <li><a href="#existing_inventory">Existing Inventory</a></li>
        <li><a href="#used_inventory">Used Inventory</a></li>
        <li><a href="#trade-in">Trade-in</a></li>
        <li><a href="#cybertruck">Cybertruck</a></li>
        <li><a href="#roadster">Roadster</a></li>
      </NavBar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
    margin-right: 10px;
  }
`;

const MenuBtn = styled.div`
  height: 25px;
  width: 60px;
  background-color: rgba(23, 26, 32, 0.8);
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: white;
  border-radius: 100px;
  opacity: 0.85;
  cursor: pointer;
`;

const RightMenuGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavBar = styled.div`
  position: fixed;
  top:0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseButton)`
  cursor: pointer;
  margin-right: 10px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
  }
`;