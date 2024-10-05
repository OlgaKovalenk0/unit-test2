export function sortCharactersByHealth(players) {
/*
[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
  */

return players.sort((a, b) => {
    if (a.health < b.health) {
      return 1
    } else if (a.health > b.health) {
      return -1
    }
    return 0
  })
}