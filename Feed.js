import React from 'react';
import Post from './Post';


const Feed = ({posts}) => {
  console.log("feed from posts",posts)
  return (
   <div className='feed' >
       { posts && posts.map(post => (
       <Post  key={post.id} post={post}/>
        ))}
   </div>
  );
}





export default Feed;
