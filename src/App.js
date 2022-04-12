import Nav from "./components/Nav";
import Posts from "./components/Posts";
import React, { useState, useEffect } from 'react';


function App() {
  const [posts,setPosts] = useState([
    // {
    //   name: 'Ivan Angjelkoski',
    //   post: 'Welcome World'
    // },
    // {
    //   name: 'Joca King',
    //   post: 'KRONOSS ANASTASIJAA'
    // },
  ]);
  useEffect(fetchPosts ,[])
  useEffect(()=> { document.body.classList.add('dark:bg-gray-900') },[])
  function fetchPosts() {
    async function fetchPostsApi() {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await res.json();
      const newData = data.map(post => {
        return {
          name: post.email,
          post: post.body
        }
        })
        setPosts(newData);
    } 
    fetchPostsApi();
  }

  function addPost(post) {
      setPosts((prevPosts) => [...prevPosts,post])
  }

  return (
    <div className="min-h-screen bg-indigo-200 text-gray-800 dark:bg-gray-900 dark:text-gray-100' inline-block w-full">
      <Nav />
      <Posts posts={posts} addPost={addPost} />
    </div>
    );
}

export default App;
