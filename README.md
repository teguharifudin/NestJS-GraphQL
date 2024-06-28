![](https://www.teguharief.com/img/teguh-arief.png)

# NestJS GraphQL

NestJS CRUD with GraphQL, PostgreSQL, and TypeORM.

## Database

Download PostgreSQL installation packaged at https://postgresapp.com/

And install on Terminal
```
brew install postgresql
```

## Installation

### From source

```
git clone git@github.com:teguharifudin/NestJS-GraphQL.git
```
```
cd NestJS-GraphQL
```

## Developing

```
npm install
```
```
npm run start:dev
```

### GraphQL Queries

Then run the app at http://localhost:3001/graphql

#### to create new book along with the author
```
mutation {
  createBook(bookData:
  {
    Name: "The Quran is My Oxygen",
    Author: "Abdullah"
  }) {
    Author
    Name
  }
}
```

#### to get all book data
```
{
  findAll {
    ID
    Author
    Name
    UpdatedDate
  }
}
```

#### to find book specified by id
```
{
  findBookByID(ID: 1) {
    ID
    Name
    Author
  }
}
```

#### delete book specified by id
```
mutation {
  deleteBookByID(ID: 1) {
    deletedRecordCount
  }
}
```

#### update the book specified by the id
```
mutation {
  updateBookByID(
    ID: 1
    updateBookData:
    {
       Name: "The Quran is My Oxygen",
       Author: "Abd al-Rahman"
    }
  ) {
    Name
    Author
  }
}
```

## Contributing

### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/teguharifudin/NestJS-GraphQL/issues) to report any bugs or file feature requests.
