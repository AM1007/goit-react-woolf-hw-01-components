### Friends list

We need to create a `<FriendList>` component with which we can display
information about the user's friends. Information about friends is stored in the
[`friends.json`](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Ffriend-list%2Ffriends.json)
file.

[![Preview](https://textbook.edu.goit.global/lms-react-woolf-homework/uk/img/hw-01/friend-list.jpg)

##### Description of the `<FriendList>` component

The component must accept one `friends` prop – an array of friends objects.

The component should create a DOM of the following structure.

```html
<ul class="friend-list">
  <!-- Arbitrary quantity FriendListItem -->
</ul>
```

##### Description of the `<FriendListItem>` component

The component must accept several props:

- `avatar` - link to the avatar
- `name` - friend's name
- `isOnline` - a boolean indicating the state of a friend: online or not.

Depending on the `isOnline` prop, the background color of `span.status` should
change. This can be done using various CSS classes or Styled Components.

The component should create a DOM of the following structure.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

##### Example of use

```jsx
import friends from 'path/to/friends.json';

<FriendList friends={friends} />;
```
