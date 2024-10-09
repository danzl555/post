import Post from './Post.js';

class PostList {
  constructor(onDelete, rootElement) {
    this.onDelete = onDelete; 
    this.rootElement = rootElement; 
  }

  render(posts) {
    const postListElement = document.createElement('div');
    postListElement.classList.add('post-list'); 

    posts.forEach(post => {
      const postComponent = new Post(post, this.onDelete);
      postListElement.appendChild(postComponent.render());
    });

    this.rootElement.querySelector('.post-list')?.remove();
    this.rootElement.appendChild(postListElement);
  }
}

export default PostList;
