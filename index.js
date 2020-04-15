const superbowlWin = (statsArray) => {
  const win = statsArray.find(stat => stat.result === "W")
  return win ? win.year : win
}