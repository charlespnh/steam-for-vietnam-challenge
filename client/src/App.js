import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.id}`)
        .then((response) => response.json())
        .then((data) => setPosts(data));
      
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedUser.id}`)
        .then((response) => response.json())
        .then((data) => setPhotos(data));
    }
  }, [selectedUser]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => handleUserClick(user)}>{user.name}</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>{selectedUser.name}'s Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
          <h2>{selectedUser.name}'s Photos</h2>
          <ul>
            {photos.map((photo) => (
              <li key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <p>{photo.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
