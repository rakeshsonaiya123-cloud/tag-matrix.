
const filterBtns = document.querySelectorAll('.filter-btn');
const globalSearch = document.getElementById('globalSearch');
const cards = document.querySelectorAll('.item-card');
const sections = document.querySelectorAll('.category-section');
let currentFilter = 'all';
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFiltersAndSearch();
  });
});
globalSearch.addEventListener('input', () => {
  applyFiltersAndSearch();
});
function applyFiltersAndSearch() {
  const query = globalSearch.value.trim().toLowerCase();
  sections.forEach(section => {
    const cat = section.dataset.category;
    if (currentFilter === 'all' || currentFilter === cat) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
  cards.forEach(card => {
    const cat = card.dataset.category;
    const name = (card.dataset.name || '').toLowerCase();
    const text = card.textContent.toLowerCase();
    const matchesFilter = currentFilter === 'all' || currentFilter === cat;
    const matchesSearch = query === '' || text.includes(query) || name.includes(query);
    if (matchesFilter && matchesSearch) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

