export const sortedMouvies = (query, mouvies) => {
  const sortedMouvies = [...mouvies].sort((a, b) => {
    if (query === "rating") {
      return b.rating - a.rating;
    } else if (query === "year") {
      return b.year - a.year;
    }
  });
  return sortedMouvies;
};
