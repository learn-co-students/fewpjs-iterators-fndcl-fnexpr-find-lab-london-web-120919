const superbowlWin = (record) => {
  let reco = record.find( rec => {
    return rec.result === 'W';
  })
  return reco ? reco.year : undefined
}
