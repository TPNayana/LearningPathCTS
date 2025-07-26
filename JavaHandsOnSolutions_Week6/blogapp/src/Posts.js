import React from 'react';
import Post from './Post'; // Import the Post class data model

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // Initialize posts as an empty array
      hasError: false, // For componentDidCatch
      errorInfo: null // For componentDidCatch
    };
  }

  // Method to fetch posts from the API
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Map the fetched data to your Post class instances
      const postsData = data.map(item => new Post(item.userId, item.id, item.title, item.body));
      this.setState({ posts: postsData, hasError: false }); // Update state with fetched posts
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      this.setState({ hasError: true, errorInfo: error }); // Set error state
      alert(`Error fetching posts: ${error.message}. Check console for details.`); // Display alert
    }
  };

  // Lifecycle hook: Called after the component mounts
  componentDidMount() {
    console.log("Posts component did mount. Fetching posts...");
    this.loadPosts(); // Call the method to load posts
  }

  // Lifecycle hook: Catches errors from descendant components
  componentDidCatch(error, errorInfo) {
    console.error("Caught an error in Posts component:", error, errorInfo);
    this.setState({
      hasError: true,
      errorInfo: errorInfo
    });
    alert("An error occurred in a component. Check console for details."); // Alert user
  }

  // Render method to display the posts
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>; // Fallback UI for errors
    }

    return (
      <div className="posts-container">
        <h2>Blog Posts</h2>
        {this.state.posts.length > 0 ? (
          this.state.posts.map(post => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3> {/* Display title */}
              <p>{post.body}</p>    {/* Display body */}
              <hr />
            </div>
          ))
        ) : (
          <p>Loading posts or no posts available...</p> // Loading state
        )}
      </div>
    );
  }
}

export default Posts;