// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name: string, album_title: string, track_number?: number): object {
    if (track_number) {
        return {
            artist_name: artist_name,
            album_title: album_title,
            track_number: track_number
        };
    } else {
        return {
            artist_name: artist_name,
            album_title: album_title
        };

    }
}
let album1 = make_album("Fuzön", "Saagar")
let album2 = make_album("Nusrat Fateh Ali Khan", "Mast Qalandar")
let album3 = make_album("Abida Parveen", "Sufis At The Cinema")
let album4 = make_album("Strings", "Duur", 4)

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);

console.log(typeof album1);
console.log(typeof album2);
console.log(typeof album3);
console.log(typeof album4);



