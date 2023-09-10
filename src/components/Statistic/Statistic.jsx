import PropTypes from 'prop-types';


export const Statistic = ({label, percentage }) => {
    return (
        
        <>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
        </>
        
    );
};

Statistic.propTypes = {
    label: PropTypes.string,
    percentage : PropTypes.number
}