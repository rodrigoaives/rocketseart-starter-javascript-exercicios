function temHabilidade(skills) {
  var resultado =
    skills.indexOf("Javascript") != -1
      ? console.log(true)
      : console.log(false);
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
