import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LinkingWrapper = styled.ul`
    display:flex;
    list-style:none;
    margin-left:100px;
`;

export default styled(NavLink)`
    text-decoration:none;
`;

export const LinkItem = styled.li`
    padding:7px 35px;
    margin:0 15px;
    text-decoration:none;
    font-size:16px;
    background:none;
    color:black;
    font-weight:400;
    border-radius:30px;
    &:hover{
    background:grey;
    color:white;
    }
    
`;

export const Navbar = styled.nav`
    display:flex;
    align-items:center;
    border-bottom:1px solid black;
`;

export const NavbarLogo = styled.img`
    width:200px;
    height:50px;
`;



