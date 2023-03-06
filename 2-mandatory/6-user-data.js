/*
create an array of objects that store data related to users!

for each user properties are:
name (string),
age (number),
address (object contains city and street),
registerYear (number),
isOnline (boolean)

Imagin users data is in table below:
---------------------------------------------------------------------------
name      | age     | City       | Street          | registerYear | isOnline
---------------------------------------------------------------------------
Sarah     | 20      | Glasgow    | Byres Road      | 2012         | false
---------------------------------------------------------------------------
Heidi     | 16      | London     | Main Road       | 2020         | true
---------------------------------------------------------------------------
Kitty     | 36      | London     | Third Street    | 2021         | false
---------------------------------------------------------------------------
Jack      | 32      | Glasgow    | Hyndland        | 2010         | false
---------------------------------------------------------------------------
Mike      | 16      | Glasgow    | Kensington Road | 2012         | true

write a function that prints which users are online!
write a function that prints who is first user of website which register earlier!
write a function that prints user names who lived in London!
*/
const userDate = [
  {
    name: "Sarah",
    age: 20,
    address: { city: "Glasgow", street: "Byres Road" },
    registerYear: 2012,
    isOnline: false,
  },
  {
    name: "Heidi",
    age: 16,
    address: { city: "London", street: "Main Road" },
    registerYear: 2020,
    isOnline: true,
  },
  {
    name: "Kitty",
    age: 36,
    address: { city: "London", street: "Third Street" },
    registerYear: 2021,
    isOnline: false,
  },
  {
    name: "Jack",
    age: 32,
    address: { city: "Glasgow", street: "Hyndland" },
    registerYear: 2010,
    isOnline: false,
  },
  {
    name: "Mike",
    age: 16,
    address: { city: "Glasgow", street: "kensington Road" },
    registerYear: 2012,
    isOnline: true,
  },
];


function onlineUsers(userDate){
  userDate.forEach((user)=>{
    if (user.isOnline === true) console.log(user.name + " is online!");
  })
}

function whoIsFirstRegisteredUser(userDate){
  let smallest = 3000;
  let firstRegisteredUser = "";
  userDate.forEach((user)=>{
    if (user.registerYear < smallest) {
      firstRegisteredUser = user.name;
      smallest = user.registerYear;
    }
  })
  return firstRegisteredUser;
}

function whoIsFromLondon(userDate){
  let usersFromLondon = [];
  userDate.forEach((user) => {
  if (user.address.city === "London") usersFromLondon.push(user.name);
});
  return usersFromLondon;
}

onlineUsers(userDate);
console.log("first user who had registered earlier is " + whoIsFirstRegisteredUser(userDate));
console.log("this users are from London: ");
whoIsFromLondon(userDate).forEach((user) => {
  console.log(user);
});
