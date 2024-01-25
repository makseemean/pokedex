import './header.scss';

import pokemonLogo from '../../assets/logo.svg';

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <a className="logo" href="#">
               <img className="logo__img" src={pokemonLogo} alt="Polemon" />
            </a>
         </div>
      </header>
   );
};

export default Header;