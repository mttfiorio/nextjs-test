type Post = {
  _id: string;
  creator: {
    _id: string;
    username: string;
    image: string;
  };
  tag: string;
  prompt: string;
};

export default Post;
