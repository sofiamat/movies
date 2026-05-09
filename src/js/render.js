export const renderMouvies = (mouvies, container) => {
  const mouviesHtml = `<ul class="mouvie_list" >${mouvies
    .map(
      (film) => ` <li class="mouvie_item">
              <article class="mouvie">
                <div class="mouvie_info">
                  <img class="mouvie_img" src="${film.poster}" alt="poster: ${film.title}" />
                  <h2 class="mouvie_title">${film.title}</h2>
                  <p class="mouvie_year">${film.year}</p>
                  <p class="mouvie_despription">${film.description}</p>
                  <p class="mouvie_genre">${film.genre.join(", ")}</p>
                  <p class="mouvie_rating">${film.rating}</p>
                </div>
              </article>
            </li>
          `,
    )
    .join("")}</ul>`;
  if (container) {
    container.innerHTML = mouviesHtml;
  }
};
