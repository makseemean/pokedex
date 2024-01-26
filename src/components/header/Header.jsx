import './header.scss';

import pokemonLogo from '../../assets/logo.svg';

const Header = () => {
   return (
      <header className="header">
         <a className="logo" href="#">
            <img className="logo__img" src={pokemonLogo} alt="Polemon" />
         </a>
      </header>
   );
};

export default Header;