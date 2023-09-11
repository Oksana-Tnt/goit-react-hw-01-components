import { Statistic } from "components/Statistic/Statistic";
import PropTypes from 'prop-types';

import { Li, Ul } from "./StatisticList.styled";

export const StatisticsList = ({statistics}) =>{
    return (
        <Ul>
            {statistics.map(({id, label, percentage}) => (
                <Li key={id}>                
                                      
                    <Statistic
                        label={label}
                        percentage={percentage} />
                </Li>
            ))}


        </Ul>
     
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