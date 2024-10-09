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

  loadPosts() {
    this.posts = this.getPosts();
    this.filteredPosts = [...this.posts];
    this.postList.render(this.filteredPosts);
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

  getPosts() {
    return [
      {
        id: 1,
        name: 'Первый пост',
        body: 'Это содержимое первого поста. Здесь вы можете узнать много интересного!'
      },
      {
        id: 2,
        name: 'Второй пост',
        body: 'Во втором посте мы обсуждаем различные темы. Не пропустите!'
      },
      {
        id: 3,
        name: 'Третий пост',
        body: 'Третий пост посвящен новым технологиям и инновациям в нашей жизни.'
      },
      {
        id: 4,
        name: 'Четвёртый пост',
        body: 'Здесь мы поговорим о личном развитии и самообразовании.'
      },
      {
        id: 5,
        name: 'Пятый пост',
        body: 'В пятом посте мы рассмотрим увлекательные факты о мире.'
      },
      {
        id: 6,
        name: 'Шестой пост',
        body: 'Шестой пост посвящён советам по улучшению продуктивности.'
      },
      {
        id: 7,
        name: 'Седьмой пост',
        body: 'В этом посте мы обсудим самые популярные книги года.'
      },
      {
        id: 8,
        name: 'Восьмой пост',
        body: 'Этот пост будет о путешествиях и лучших местах для отдыха.'
      },
      {
        id: 9,
        name: 'Девятый пост',
        body: 'Девятый пост расскажет о здоровом образе жизни и правильном питании.'
      },
      {
        id: 10,
        name: 'Десятый пост',
        body: 'В заключительном посте мы подведем итоги и сделаем выводы.'
      }
    ];
  }
}

const app = new App();
app.loadPosts();
