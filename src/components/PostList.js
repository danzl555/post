import Post from './Post.js';

class PostList {
  constructor(onDelete, rootElement) {
    this.onDelete = onDelete;
    this.rootElement = rootElement;
    this.postListElement = document.createElement('div');
    this.postListElement.classList.add('post-list');
  }

  render(posts) {
    this.postListElement.innerHTML = '';

    posts.forEach(post => {
      const postComponent = new Post(post, this.onDelete);
      this.postListElement.appendChild(postComponent.render());
    });

    if (!this.rootElement.contains(this.postListElement)) {
      this.rootElement.appendChild(this.postListElement);
    }
  }
}

export default PostList;
