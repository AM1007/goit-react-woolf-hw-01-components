import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => (
  <FriendsItem>
    <Status status={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </FriendsItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
