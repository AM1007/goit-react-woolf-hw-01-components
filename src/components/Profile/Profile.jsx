import PropTypes from 'prop-types';
import user from '../../data/user.json';
import { Section } from 'components/Section';
import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Stats,
  Label,
  Stat,
  Quantity,
} from './Profile.styled.jsx';

export const Profile = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Section>
      <Wrapper>
        <Description>
          <Avatar src={avatar} alt={username} />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Tag>{location}</Tag>
        </Description>

        <Stats>
          <Stat>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </Stat>
          <Stat>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </Stat>
          <Stat>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </Stat>
        </Stats>
      </Wrapper>
    </Section>
  );
};

Profile.propTypes = {
  profileData: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
