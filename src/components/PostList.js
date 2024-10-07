import Post from './Post.js';

class PostList {
  constructor() {
    this.container = document.getElementById('app');
  }

  render(posts) {
    this.container.innerHTML = '';
    posts.forEach(post => {
      const postComponent = new Post(post);
      this.container.appendChild(postComponent.render());
    });
  }
}

export default PostList;
