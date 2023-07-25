class Song{
    constructor(title, artist ,body) {
        this.title = title;
        this.artist = artist;
        this.body = body;
    }
}

const mySong = new Song("1 2 3", "Love Love Love", "A B C");
console.log(mySong.artist, mySong.title, mySong.body);
console.log(mySong.title);