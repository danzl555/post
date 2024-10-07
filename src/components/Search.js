import { debounce } from '../helpers/index.js';

class Search {
  constructor(onSearch) {
    this.onSearch = onSearch;
    this.searchInput = document.createElement('input');
    this.searchInput.setAttribute('placeholder', 'DanzlBiglya введи что-нибудь');
    this.searchInput.style.marginBottom = '20px';
    this.searchInput.style.height = '100px';
    this.searchInput.style.width = '500px';
    this.searchInput.style.fontWeight = '900';

    document.body.insertBefore(this.searchInput, document.getElementById('app'));

    this.searchInput.addEventListener('input', debounce(() => {
      this.onSearch(this.searchInput.value);
    }, 700));
  }
}

export default Search;
