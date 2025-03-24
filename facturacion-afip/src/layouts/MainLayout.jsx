import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  ContentContainer,
  MainContainer,
  Navbar,
  NavLink,
  NavLinks,
  UserImage,
  UserSection
} from './styles/MainLayout.styles';

const MainLayout = () => {
  const location = useLocation();

  return (
    <MainContainer>
      <Navbar>
        <UserSection>
          <UserImage 
            src="https://via.placeholder.com/40" 
            alt="Usuario"
          />
        </UserSection>
        <NavLinks>
          <NavLink 
            as={Link} 
            to="/administraciones"
            className={location.pathname === '/administraciones' ? 'active' : ''}
          >
            Administrar Edificios
          </NavLink>
        </NavLinks>
      </Navbar>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </MainContainer>
  );
};

export default MainLayout; 