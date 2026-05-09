export const searchFilm = (query, mouvies) => {
  const mouvieFilter = mouvies.filter(
    (mouvie) =>
      mouvie.title.toLowerCase().includes(query) ||
      mouvie.description.toLowerCase().includes(query),
  );
  return mouvieFilter;
};
