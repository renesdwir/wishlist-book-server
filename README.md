# Wishlist Book Server

This is a server from the wishlistbook client that I created, there are 3 APIs, including get, post, and delete wishlist

## Built With

- [![Nodejs][nodejs]][nodejsurl]
- [![MongoDB][mongodb]][mongodburl]
- [![Express][express]][expressurl]
- [![Mongoose][mongoose]][mongooseurl]

## End Points

| Method | Route                         | Description                   |
| :----- | :---------------------------- | :---------------------------- |
| GET    | /                             | Base API                      |
| GET    | /books/getWishlistBook        | Get all books from `Wishlist` |
| POST   | /books/addWishlistBook        | Add book to `Wishlist`        |
| DELETE | /books/deleteWishlistBook/:id | Delete book from `Wishlist`   |

&nbsp;

## 1. GET /books/getWishlistBook

Description:

- Get all books from `Wishlist`

_Response (200 - OK)_

```json
{
  "message": "get data success",
  "data": [
    {
      "_id": "64cf9eb33edb30622aa7b02a",
      "bookId": "KGCxAQAACAAJ2",
      "title": "Eloquent Javascript test23",
      "thumbnail": "http://books.google.com/books/content?id=YTFhtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      "authors": "Marijn Haverbeke 6",
      "averageRating": 4.5,
      "ratingsCount": 300,
      "createdAt": "2023-08-06T13:22:59.672Z",
      "updatedAt": "2023-08-06T13:22:59.672Z",
      "__v": 0
    },...
  ]
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

## 2. POST /books/addWishlistBook

Description:

- Add book to `Wishlist`

Request:

- body:

```json
{
  "bookId": "KGCxAQAACA2AJ2",
  "title": "Eloquent Javascript",
  "thumbnail": "http://books.google.com/books/content?id=YTFhtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "authors": "Marijn Haverbeke",
  "averageRating": 4.5,
  "ratingsCount": 200
}
```

_Response (201 - Created)_

```json
{
  "message": "Wishlist book created successfully",
  "data": {
    "bookId": "KGCxAQAACA2AJ2w",
    "title": "Eloquent Javascript test23",
    "thumbnail": "http://books.google.com/books/content?id=YTFhtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "authors": "Marijn Haverbeke 6",
    "averageRating": 4.5,
    "ratingsCount": 300,
    "_id": "64d1a19c8bd1e0a1059942e7",
    "createdAt": "2023-08-08T01:59:56.565Z",
    "updatedAt": "2023-08-08T01:59:56.565Z",
    "__v": 0
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "The book is already on the wishlist"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

## 3. DELETE /books/deleteWishlistBook/:id

Description:

- Delete book from `Wishlist`

Request:

- params:

```json
{
  "id": "ZzQzEAAAQBAJ"
}
```

_Response (200 - OK)_

```json
{
  "message": "Wishlist book deleted successfully",
  "data": {
    "_id": "64cfb7b620c17d8069269bac",
    "bookId": "ZzQzEAAAQBAJ",
    "title": "97 Things Every Data Engineer Should Know",
    "thumbnail": "http://books.google.com/books/content?id=ZzQzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "authors": "Tobias Macey",
    "averageRating": 0,
    "ratingsCount": 0,
    "createdAt": "2023-08-06T15:09:42.895Z",
    "updatedAt": "2023-08-06T15:09:42.895Z",
    "__v": 0
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Book does not exists"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

[nodejsurl]: https://nextjs.org/
[nodejs]: https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[mongodburl]: https://www.mongodb.com/
[mongodb]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[expressurl]: https://www.expressjs.com/
[express]: https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white
[mongooseurl]: https://mongoosejs.com/
[mongoose]: https://img.shields.io/badge/Mongoose-880000.svg?&style=for-the-badge&logo=mongoose&logoColor=white
