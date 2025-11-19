// LocalStorage-də istifadəçilər və reklamlar
function addUser(id, name) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (!users.find(u => u.id === id)) {
        users.push({ id: id, name: name, ads: 0 });
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function addAd(userId) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let ads = parseInt(localStorage.getItem('ads') || '0');

    let user = users.find(u => u.id === userId);
    if (user) {
        user.ads = (user.ads || 0) + 1;
        localStorage.setItem('users', JSON.stringify(users));
    }

    localStorage.setItem('ads', ads + 1);
}

// --- Bot eventləri ilə bağla ---

// Yeni istifadəçi gələndə
function onNewUser(id, name) {
    addUser(id, name);
    console.log(`Yeni istifadəçi əlavə olundu: ${name}`);
}

// İstifadəçi reklam izləyəndə
function onAdWatched(userId) {
    addAd(userId);
    console.log(`Reklam izləndi, istifadəçi ID: ${userId}`);
}
