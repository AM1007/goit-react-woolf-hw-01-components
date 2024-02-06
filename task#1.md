### Social network profile

We need to develop a `<Profile>` component that allows us to showcase
information about a user on a social network. The user data is stored in the
[`user.json`](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Fsocial-profile%2Fuser.json)
file.

![Preview](./assets/social-profile.png)

##### Description of the `<Profile>` component

The component should accept several props with information about the user:

- `username` — username
- `tag` — a tag in a social network without @
- `location` — city and country
- `avatar` — a link to an image
- `stats` — an object with information about activities

The component must create a DOM element of the following structure.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

##### Example of use

```js
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```
