import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, fname: "Alice", age: 25 },
    { id: 2, fname: "Bob", age: 15 },
    { id: 3, fname: "Charlies", age: 22 },
  ];

  return (
    <div>
      {users.map(({ id, fname, age }) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{fname}</li>
          <li>{age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
