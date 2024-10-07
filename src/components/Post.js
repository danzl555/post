class Post {
    constructor(post) {
      this.post = post;
    }

    render() {
      const postElement = document.createElement('div');
      postElement.style.border = '1px solid #ccc';
      postElement.style.marginBottom = '10px';
      postElement.style.padding = '10px';
  
      const title = document.createElement('h3');
      title.textContent = this.post.name;
  
      const body = document.createElement('p');
      body.textContent = this.post.body;
  
      postElement.appendChild(title);
      postElement.appendChild(body);
  
      return postElement;
    }
  }
  
  export default Post;
  