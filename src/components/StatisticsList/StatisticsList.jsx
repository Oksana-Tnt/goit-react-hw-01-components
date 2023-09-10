import { Statistic } from "components/Statistic/Statistic";
import PropTypes from 'prop-types';

export const StatisticsList = ({items}) =>{
    return (
        <ul class="stat-list">
            {items.map(item => (
                <li key={item.id} class="item">
                    <Statistic
                        label={item.label}
                        percentage={item.percentage} />
                </li>
            ))}


        </ul>
     
    );
}
  
StatisticsList.propTypes = {
    id : PropTypes.string,
}