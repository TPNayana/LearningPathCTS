// src/App.js
import React from 'react';
import './App.css'; // Import the CSS file for styling

// --- Data Definitions ---
// Define the data arrays based on the content shown in your image

const booksData = [
  { id: 1, name: 'Master React', price: 670 },
  { id: 2, name: 'Deep Dive Into Angular 11', price: 800 },
  { id: 3, name: 'Mongo Essentials', price: 450 },
];

const blogData = [
  {
    id: 1,
    title: 'React Learning',
    author: 'Stephen Biz',
    intro: 'Welcome to learning React!',
    subtitle: 'Installation',
    installSteps: 'You can install React from npm.',
  },
];

const coursesData = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/20201' }, // Note: Assuming '20201' is a typo and should be '2021'
];

// --- Detail Components ---

function CourseDetails({ courses }) {
  return (
    <div className="detail-section">
      <h2>Course Details</h2>
      {courses.map(course => (
        <div key={course.id} className="detail-item">
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

function BookDetails({ books }) {
  return (
    <div className="detail-section">
      <h2>Book Details</h2>
      {books.map(book => (
        <div key={book.id} className="detail-item">
          <h3>{book.name}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

function BlogDetails({ blogs }) {
  // The image shows specific, somewhat static blog content rather than a list of multiple posts.
  // We'll hardcode based on the image for exact match. If you had multiple blog posts,
  // you'd use .map() here as well, similar to books/courses.
  const blogPost = blogs[0]; // Assuming only one blog post for now as per image content
  return (
    <div className="detail-section">
      <h2>Blog Details</h2>
      {blogPost && ( // Render only if blogPost exists
        <div className="detail-item">
          <h3>{blogPost.title}</h3>
          <p>{blogPost.author}</p>
          <p>{blogPost.intro}</p>
          <h3>{blogPost.subtitle}</h3>
          <p>{blogPost.installSteps}</p>
        </div>
      )}
    </div>
  );
}

// --- Main App Component ---
function App() {
  return (
    <div className="App">
      <h1>Blogger App</h1>
      <div className="content-container">
        {/* Course Details Section */}
        <CourseDetails courses={coursesData} />

        {/* Vertical Separator */}
        <div className="vertical-line"></div>

        {/* Book Details Section */}
        <BookDetails books={booksData} />

        {/* Vertical Separator */}
        <div className="vertical-line"></div>

        {/* Blog Details Section */}
        <BlogDetails blogs={blogData} />
      </div>
    </div>
  );
}

export default App;