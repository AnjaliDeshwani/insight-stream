export const filterByCategory = (videos, category) => {
  let filteredVidoes = [...videos];
  if (category === "" || category === "All") return filteredVidoes;
  return filteredVidoes.filter((video) => video.category === category);
};
