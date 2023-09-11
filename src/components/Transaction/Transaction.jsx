import PropTypes from 'prop-types';
import { Td } from './Transaction.styled';


export const Transaction = ({type, amount, currency }) => {
    return (
         
        <>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
        </>
        
    
    );
};

Transaction.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency : PropTypes.string
}