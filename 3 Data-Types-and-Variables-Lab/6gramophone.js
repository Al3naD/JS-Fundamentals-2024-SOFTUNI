function gramophone(band, album, song) {

    let songDurration = (album.length * band.length) * song.length / 2
    let rotations = Math.ceil(songDurration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`)
}
// gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');