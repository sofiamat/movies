export const filteredByGenre = (currentGenre, mouvies) => {
  const filteredMouvies = mouvies.filter((mouvie) =>
    mouvie.genre.includes(currentGenre),
  );
  return filteredMouvies;
};
