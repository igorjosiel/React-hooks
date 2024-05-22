import { useEffect, useState, useMemo, useRef } from 'react';
import P from 'prop-types';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function UseMemo() {
  console.log('Pai renderizou');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    console.log(inputRef.current.focus());
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default UseMemo;
