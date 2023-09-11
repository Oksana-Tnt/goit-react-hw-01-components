import PropTypes from 'prop-types';
import { Label, Percentage } from './Statistic.styled';


export const Statistic = ({label, percentage }) => {
    return (
        
        <>
            <Label>{label}</Label>
            <Percentage className="percentage">{percentage}</Percentage>
        </>
        
    );
};

Statistic.propTypes = {
    label: PropTypes.string,
    percentage : PropTypes.number
}