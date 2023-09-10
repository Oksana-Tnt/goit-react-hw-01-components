import { Statistic } from "components/Statistic/Statistic";
import css from "./StatisticList.module.css";
import PropTypes from 'prop-types';
import { getRandomColor } from "components/utils/GetRandomColor";

export const StatisticsList = ({statistics}) =>{
    return (
        <ul className={css.statlist}>
            {statistics.map(({id, label, percentage}) => (
                <li key={id} className={css.item} style={{ backgroundColor: getRandomColor() }}>                
                                      
                    <Statistic
                        label={label}
                        percentage={percentage} />
                </li>
            ))}


        </ul>
     
    );
}
  
StatisticsList.propTypes = {
    statistics:PropTypes.arrayOf(
    PropTypes.exact(
        { id: PropTypes.string.isRequired, 
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired
         }
    )
    )
}