import PropTypes from 'prop-types';
import { Img, P, Status } from './FriendListItem.styled';


export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
    
        <>
            <Status typestatus={isOnline}></Status>
            <Img src={avatar} alt={name}/>
            <P>{name}</P>
        </>
        
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    typestatus : PropTypes.bool
}

