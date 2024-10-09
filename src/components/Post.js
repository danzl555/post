class Post {
  constructor(post, onDelete) {
    this.post = post;
    this.onDelete = onDelete;
  }

  render() {
    const postElement = document.createElement('div');
    postElement.classList.add('post'); 

    const title = document.createElement('h3');
    title.classList.add('post-title'); 
    title.textContent = this.post.name;

    const body = document.createElement('p');
    body.textContent = this.post.body;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button'); 
    deleteButton.textContent = '✖';
    deleteButton.addEventListener('click', () => {
      this.onDelete(this.post.id);
      postElement.remove(); 
    });

    postElement.appendChild(title);
    postElement.appendChild(body);
    postElement.appendChild(deleteButton)

    return postElement;
  }
}

export default Post;
