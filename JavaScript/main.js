const userListContainer = document.getElementById('user-list-container');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

const renderUserCards = (filteredUsers) => {
  userListContainer.innerHTML = '';
  filteredUsers.forEach(user => {
    const userCardHTML = `
      <div class="user-card">
        <img src="${user.image}" alt="${user.name}のプロフィール画像" class="profile-img">
        <h3 class="user-name">${user.name}</h3>
        <p class="user-message">「${user.message}」</p>
        <div class="user-rating">
          ${user.rating}
        </div>
        <div class="user-comment">
          「${user.comment}」
        </div>
      </div>
    `;
    userListContainer.innerHTML += userCardHTML;
  });
};

renderUserCards(users);

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  
  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchTerm) || 
           user.message.toLowerCase().includes(searchTerm);
  });
  
  renderUserCards(filteredUsers);
});