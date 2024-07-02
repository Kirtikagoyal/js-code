const accountId = 140704
let accountEmail = "kits@google.com"
var accountPassword = "12345"
accountCity= "Delhi"
let accountState; 

// accountId = 2 // not allowed

accountEmail = "ki@ki.com"
accountPassword = "212245"
accountCity = "Banglore"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var becoz of issue in block scope and functional scope
/*
