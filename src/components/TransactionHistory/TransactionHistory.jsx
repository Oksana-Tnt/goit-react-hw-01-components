import { Transaction } from "components/Transaction/Transaction";
import PropTypes from 'prop-types';
import { Table, Thead, Tr } from "./TransactionHistory.styled";

export const TransactionHistory = ({ transactions }) => {
    return (
        <Table>
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

            <tbody>
                 {transactions.map(({id, type, amount, currency}) => (
                <Tr key={id}>
                    <Transaction
                    type={type}
                    amount={amount} 
                    currency={currency}/>
                         
                </Tr>
            ))}     
        </tbody>
</Table>
    );
}
  
TransactionHistory.propTypes = {
    transactions:PropTypes.arrayOf(
    PropTypes.exact(
        { id: PropTypes.string.isRequired, 
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency:PropTypes.string.isRequired
         }
    )
    )
}