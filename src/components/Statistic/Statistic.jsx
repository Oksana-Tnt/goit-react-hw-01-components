import PropTypes from 'prop-types';


export const Statistic = ({label, percentage }) => {
    return (
        
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </>
        
    );
};

Statistic.propTypes = {
    label: PropTypes.string,
    percentage : PropTypes.number
}