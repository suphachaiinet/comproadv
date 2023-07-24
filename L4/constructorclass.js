class Song{
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song("Rock star","Love Love Love");
console.log(mySong.artist);
console.log(mySong.title);