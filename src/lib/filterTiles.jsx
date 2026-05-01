export default function filterTilesSearch(allTiles, search) {
  if (!search) {
    return allTiles;
  }
  return allTiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase()),
  );
}
