import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'I am intercontinental, cuz!', body: 'lorem ipsum...', author: 'Bear', id: 1 },
    { title: 'Welcome to the party!', body: 'lorem ipsum...', author: 'Cub', id: 2 },
    { title: 'California love!', body: 'lorem ipsum...', author: 'Guppy', id: 3 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Panda', id: 4 }
  ])

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;