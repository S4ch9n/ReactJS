import React, { useEffect, useState } from 'react';

const Example3 = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const clearName = () => {
    setName("");
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={clearName}>Clear name</button>
    </div>
  );
};

export default Example3;
