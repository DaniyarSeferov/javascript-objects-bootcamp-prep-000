var playlist = new Object({'sting': 'shape of my heart'})

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  console.log(delete playlist.artistName);
  console.log(playlist)
  return playlist
}

var a = removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")
console.log(a)