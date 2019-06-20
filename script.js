var databese=[
  {
    username:"Melqui",
    Password:"meu"
},
{
  username:"Andre",
  Password:"pai"
}
];

var newsFeed=[
{
  username:"Mateus",
  timeline:"Meu deus do ceu"
},
{
  username:"Carlos",
  timeline:"JS is the best"
}

];
var usernamePrompt= prompt("Enter your username!");
var passwordPrompt= prompt("Enter your Password!");
function uservalid(username,password) {
  for (var i = 0; i < databese.length; i++) {
    if (username===databese[i].username && password===databese[i].Password) {
      return true;
    }
  }
      return false;
}
function signIn(username,password) {
if (uservalid(username,password)) {
  console.log(newsFeed);
}
else {
  console.log("try again!")
}
}


signIn(usernamePrompt,passwordPrompt);
