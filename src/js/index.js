const inputSearch = document.getElementById("input-search");
const bntSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const BASE_URL = 'https://api.github.com';

bntSearch.addEventListener("click", async () => {
  const userName = inputSearch.value;

  if (userName) {
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

    try {

    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if(!response.ok) {
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        return;
        profileResults.innerHTML = "";

    }

    const userData = await response.json();
    console.log(userData);

    profileResults.innerHTML = `
    <div class="profile-card">
        <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}"
        class="profile-avatar">
        <div class="proflie-info">
            <h2>${userData.name}</h2>
            <p>${userData.bio || 'Não possui bio cadastrada 😒'}</p>
        </div>
    </div>`;

    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamento mais tarde.');
        profileResults.innerHTML = "";
    }    
    
  } else {
    alert("Por favor, digite um nome de usuário do GitHub");
    profileResults.innerHTML = "";
  }
});
