const axios = require('axios');

async function addUser(id, name) {
    await axios.post('http://localhost:3000/api/users', { id, name });
    console.log(`Yeni istifadəçi əlavə olundu: ${name}`);
}

async function addAd(userId) {
    await axios.post(`http://localhost:3000/api/users/${userId}/ad`);
    console.log(`Reklam izlənildi, istifadəçi ID: ${userId}`);
}

// Test nümunəsi
(async () => {
    await addUser(1, "Ali");
    await addUser(2, "Aysel");
    await addAd(1);
    await addAd(1);
    await addAd(2);
})();
