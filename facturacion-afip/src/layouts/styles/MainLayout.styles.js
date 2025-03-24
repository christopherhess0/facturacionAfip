import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Navbar = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #e0e0e0;
    font-weight: 500;
  }
`;

export const ContentContainer = styled.main`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 20px;
`; 