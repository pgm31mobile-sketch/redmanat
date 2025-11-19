// Məlumatları LocalStorage-dən oxu
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function getAds() {
  return JSON.parse(localStorage.getItem('ads') || '0');
}

// Paneli yenilə
function updatePanel() {
  const users = getUsers();
  const ads = getAds();

  document.getElementById('userCount').innerText = users.length;
  document.getElementById('adCount').innerText = ads;

  const tbody = document.querySelector('#userTable tbody');
  tbody.innerHTML = '';
  users.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = <td>${u.id}</td><td>${u.name}</td><td>${u.ads || 0}</td>;
    tbody.appendChild(tr);
  });
}

// İstifadəçi axtar
function searchUser() {
  const query = document.getElementById('searchUser').value.toLowerCase();
  const users = getUsers();
  const tbody = document.querySelector('#userTable tbody');
  tbody.innerHTML = '';
  users.filter(u => u.name.toLowerCase().includes(query))
       .forEach(u => {
         const tr = document.createElement('tr');
         tr.innerHTML = <td>${u.id}</td><td>${u.name}</td><td>${u.ads || 0}</td>;
         tbody.appendChild(tr);
       });
}

// Reklamları sıfırla
function resetAds() {
  localStorage.setItem('ads', '0');
  const users = getUsers().map(u => ({ ...u, ads: 0 }));
  localStorage.setItem('users', JSON.stringify(users));
  updatePanel();
}

// Paneli ilk dəfə yükləyərkən
updatePanel();
