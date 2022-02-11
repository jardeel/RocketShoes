import { FC } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline, 
  MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

const Cart:FC = () => {
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
          <tr>
            <td>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPg_Yst9kWP8FvR1W1vpx0JB6D9VtZphyrWA&usqp=CAU" alt="Tenis"/>
            </td>
            <td>
              <strong>All Start</strong>
              <span>R$ 199,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline
                    size={20}
                    color="#7159c1"
                    onClick={() => {}}
                  />
                </button>
                <input type="number" readOnly value="2"/>
                <button type="button">
                  <MdAddCircleOutline
                    size={20}
                    color="#7159c1"
                    onClick={() => {}}
                  />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 398,99</strong>
            </td>
            <td>
              <button
                type="button"
                onClick={() => {}}
              >
                <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1500.00</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart;