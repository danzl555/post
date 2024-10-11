import PostList from './components/PostList.js';
import Search from './components/Search.js';
import './style.css';

class App {
  constructor() {
    this.posts = [];
    this.filteredPosts = [];
    this.rootElement = document.getElementById('app');

    this.postList = new PostList(this.handleDeletePost.bind(this), this.rootElement);
    this.search = new Search(this.handleSearch.bind(this), this.rootElement);
  }

  // Асинхронная загрузка постов из JSON файла
  async loadPosts() {
    try {
      const response = await fetch('./posts.json'); // Загрузка из posts.json
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      this.posts = await response.json();
      this.filteredPosts = [...this.posts];
      this.postList.render(this.filteredPosts);
    } catch (error) {
      console.error('Ошибка при загрузке постов:', error);
    }
  }

  handleSearch(searchText) {
    this.filteredPosts = this.posts.filter(post =>
      post.body.toLowerCase().includes(searchText.toLowerCase())
    );
    this.postList.render(this.filteredPosts);
  }

  handleDeletePost(id) {
    this.posts = this.posts.filter(post => post.id !== id);
    this.filteredPosts = this.filteredPosts.filter(post => post.id !== id);
    this.postList.render(this.filteredPosts);
  }

  
}

const app = new App();
app.loadPosts();
