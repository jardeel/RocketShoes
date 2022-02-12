import { FC } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline, 
  MdDelete
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { Product } from '../../types';
import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';

const Cart:FC = () => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart?.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }));

  const total = formatPrice(cart?.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0));

  function handleProductIncrement(product: Product){
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1
    });
  }

  function handleProductDecrement(product: Product){
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1
    });
  }

  function handleRemoveProduct(productId: number){
    removeProduct(productId);
  }


  return(
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>

        <tbody>
          {cartFormatted?.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title}/>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button 
                    type="button"
                    disabled={product.amount <= 1} 
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                    />
                  </button>
                  <input type="number" readOnly value={product.amount}/>
                  <button 
                    type="button"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} color="#7159c1"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart;