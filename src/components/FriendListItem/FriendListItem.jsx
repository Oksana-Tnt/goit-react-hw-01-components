import PropTypes from 'prop-types';
import { Status } from './FriendListItem.styled';


export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
    
        <>
            <Status typeStatus={isOnline}>{isOnline}</Status>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </>
        
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline : PropTypes.bool
}