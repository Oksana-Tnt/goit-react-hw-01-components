import { Transaction } from "components/Transaction/Transaction";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                 {items.map(item => (
                <tr key={item.id}>
                    <Transaction
                    type={item.type}
                    amount={item.amount} 
                    currency={item.currency}/>
                         
                </tr>
            ))}     
        </tbody>
</table>
    );
}
  
TransactionHistory.propTypes = {
 id : PropTypes.string,
}