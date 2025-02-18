import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import logo from './SPADELOGO.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    date: 'February 1, 2025',
    excerpt: 'This is a summary of the first blog post. It provides an overview of the content.',
    content: 'This is the full content of the first blog post. It goes into more detail about the topic.',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    date: 'February 10, 2025',
    excerpt: 'This is a summary of the second blog post. It provides an overview of the content.',
    content: 'This is the full content of the second blog post. It goes into more detail about the topic.',
  },
  // Add more blog posts as needed
];

function Blog() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-links left">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <Link to="/" className="logo">
          <img src={logo} alt="ACE Robotics Logo" />
        </Link>
        <div className="nav-links right">
          <Link to="/robot">Our Robot</Link>
          <Link to="/sponsors">Sponsors</Link>
        </div>
      </div>

      <div className="banner fade-in-up">
        <h1>Welcome to the ACE Blog</h1>
        <h2>The next generation of innovators</h2>
      </div>

      <div className="section fade-in-up" id="blog">
        <h2>Our Blog</h2>
        <p>Stay updated with the latest news and updates from our team.</p>
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-post">
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;