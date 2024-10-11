import { debounce } from '../helpers/index.js';

class Search {
  constructor(onSearch, rootElement) {
    this.onSearch = onSearch;
    this.searchInput = document.createElement('input');
    this.searchInput.setAttribute('placeholder', 'DanzlBiglya введи что-нибудь');
    this.searchInput.classList.add('search-input'); 
    

    rootElement.insertBefore(this.searchInput, rootElement.firstChild);

    this.debouncedSearch = debounce(() => {
      this.onSearch(this.searchInput.value);
    }, 700);

    this.searchInput.addEventListener('input', this.debouncedSearch);
  }
}

export default Search;
