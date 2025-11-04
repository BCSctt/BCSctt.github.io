// actions of the Book object (method)
function displayBook() {
    // table row with 5 cells
    var titleCell = "<td>" + this.title + "</td>";
    var authorCell = "<td>" + this.author + "</td>"
    var yearCell = "<td>" + this.year + "</td>"
    var genreCell = "<td>" + this.genre + "</td>"
    var pagesCell = "<td>" + this.pages + "</td>"

    var row = "<tr>" + titleCell + authorCell + yearCell + genreCell + pagesCell + "</tr>";

    document.write(row);
}

// defining an object using constructor function
function Book(title, author, year, genre, pages) {
    // attributes
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.pages = pages;

    // method of this object
    this.display = displayBook;
}

// 5 Book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy", 310);
var book2 = new Book("1984", "George Orwell", 1949, "Dystopian", 328);
var book3 = new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance", 279);
var book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction", 180);
var book5 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction", 281);

// array of 5 Book objects
var bookArray = [book1, book2, book3, book4, book5];

// display method for each object in the array
for (var i = 0; i < bookArray.length; i++) {
    bookArray[i].display();
}
