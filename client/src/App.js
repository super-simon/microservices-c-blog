import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h2>Create Post</h2>
      <PostCreate />
      <hr />
      <h2>Post List</h2>
      <PostList />
    </div>
  );
};

export default App;
