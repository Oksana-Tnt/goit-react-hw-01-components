import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({items}) =>{
    return (
        <ul class="friend-list">
            {items.map(item => (
                <li key={item.id} class="item">
                    <FriendListItem
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}/>
                </li>
            ))}


        </ul>
     
    );
}
  
FriendList.propTypes = {
    id : PropTypes.number,
}