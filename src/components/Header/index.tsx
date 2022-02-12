import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header:FC = () => {
  const { cart } = useCart();
  const cartSize = cart?.length;

  return(
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"/>
      </Cart>
    </Container>
  );
}


export default Header;