const whichSchool  = function (age) {
  var school;
  if (age < 13){
    school = "Elementary School";
  }
  else if (age >= 13 && age <= 18) {
    school = "Secondary School";
  }
  else {
    school = "Lighthouse Labs";
  }
  return school;
}
whichSchool(35);