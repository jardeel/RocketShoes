import { FC } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

const Home:FC = () => {
  return(
    <ProductList>
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPg_Yst9kWP8FvR1W1vpx0JB6D9VtZphyrWA&usqp=CAU" alt="Tenis"/>
        <strong>Tênis Top</strong>
        <span>R$ 130,00</span>

        <button type="button" onClick={() => {}}>
          <div>
            <MdAddShoppingCart size={16} color="#fff"/>
            R$ 260,00
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button> 
      </li>
    </ProductList>
  )
}

export default Home;