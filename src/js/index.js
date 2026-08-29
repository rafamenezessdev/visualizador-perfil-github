import { fetchGithubUser, fetchGithubUserRepos } from "./github-api.js";
import {renderProfile } from "./profile-view.js";

const inputSearch = document.getElementById("input-search");
const buttonSearch = document.getElementById("btn-search");
const profileResults = document.querySelector('.profile-results');

async function getUserProfile() {
    const userName = inputSearch.value.trim();
    if (!userName) {
        alert("Por favor, digite um nome de usuário do GitHub");
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
    try {
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        console.log(userRepos);
        
        renderProfile(userData, userRepos, profileResults);
    } catch (error) {
        console.error("Erro ao buscar o perfil do usuário:", error);
        alert("Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.");
        profileResults.innerHTML = "";
    }
}

buttonSearch.addEventListener("click", getUserProfile);

inputSearch.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        getUserProfile();
    }
});
