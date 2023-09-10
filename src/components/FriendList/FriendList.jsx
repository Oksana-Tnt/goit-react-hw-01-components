import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendLi, FriendUl } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) =>{
    return (
        <FriendUl>
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendLi key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}/>
                </FriendLi>
            ))}


        </FriendUl>
     
    );
}
  
FriendList.propTypes = {
    id : PropTypes.number,
}