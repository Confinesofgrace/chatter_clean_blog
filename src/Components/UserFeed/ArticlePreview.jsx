import { useState } from 'react';
import './ArticlePreview.css';

function ArticlePreview() {
  const [blogs, setBlogs] = useState([
    { title: 'Blog 1', body: 'Oh yeah, this is the body for this blog', author: 'Damilola', id: '1' },
    { title: 'Blog 2', body: 'Oh yeah, this is the body for blog 2', author: 'Damilola', id: '2' },
    { title: 'Blog 3', body: 'Oh yeah, this is the body for blog 3', author: 'Damilola', id: '3' },
  ]);

  return (
    <div id='articlePreview-frame'>
      
      {blogs.map((blog) => (
        <div key={blog.id} id='articlePreview'>
          <div id='articlePreview-image'>
            image from article
          </div>
          <div id='articleDetails'>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p><strong>Author:</strong> {blog.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticlePreview;
