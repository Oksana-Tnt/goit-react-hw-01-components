import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Li, Ul } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) =>{
    return (
        <Ul>
            {friends.map(({id, avatar, name, isOnline}) => (
                <Li key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                         />
                </Li>
            ))}


        </Ul>
     
    );
}
  

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact(
            {
                id: PropTypes.number,
                avatar: PropTypes.string,
                name: PropTypes.string,
                percentage: PropTypes.number,
                isOnline : PropTypes.bool
            }
        )
    )
}