import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Bear', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Cub', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Guppy', id: 3 }
  ]);

  const [name, setName] = useState('Guppy');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use efftect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Cub')}>Change Name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;