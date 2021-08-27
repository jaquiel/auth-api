exports.config = {
    /*"ConnectionString":"mongodb+srv://user:user@api-4zu1c.mongodb.net/backend?retryWrites=true&w=majority",*/
    "ConnectionString":"mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",    
}

exports.Salt = {
    "Key":"0a632dd5db81ece3ba9eaf3a52886027", //just4testing
    "Rounds": 8
}