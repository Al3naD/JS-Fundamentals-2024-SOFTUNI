function personInfo(firstName,lastName,age) {

    let info={ };
    info.firstName= firstName;
    info.lastName= lastName;
    info.age= Number(age);
  
  return info;

}
personInfo("Peter","Pan","20");