const schema = `
type User {
    id:ID!,
    firstName:String,
    lastName:String
}

type Query {
    user:User
}

schema {
    query:Query
}

`

export default schema
