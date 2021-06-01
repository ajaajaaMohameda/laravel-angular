var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyBand = /** @class */ (function () {
    function MyBand(albums_list, total_members) {
        this.albums = albums_list;
        this.members = total_members;
    }
    // Methods
    MyBand.prototype.listAlbums = function () {
        console.log("My favourite albums: ");
        for (var i = 0; i < this.albums.length; i++) {
            console.log(this.albums[i]);
        }
    };
    return MyBand;
}());
var myFavoriteAlbums = new MyBand(['Ace of Spades', 'Rock and Roll', 'March or Die'], 3);
console.log(myFavoriteAlbums.listAlbums());
var MySinger = /** @class */ (function (_super) {
    __extends(MySinger, _super);
    function MySinger(albums_list, total_members) {
        return _super.call(this, albums_list, total_members) || this;
    }
    MySinger.prototype.listAlbums = function () {
        console.log("Singer best albums:");
        for (var i = 0; i < this.albums.length; i++) {
            console.log(this.albums[i]);
        }
    };
    return MySinger;
}(MyBand));
// Create a new instance of the YourBand class.
var singerFavoriteAlbum = new MySinger(["At Falson Prision", "Among out the Stars", "Heroes"], 1);
console.log(singerFavoriteAlbum.listAlbums());
