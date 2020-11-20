const person = {
    firstName: "Swarupa",
    lastName: "Yerubandi",
    eyeColor: "black",
    info()
    {
      console.log(this);
    }
  }
  person.info();

  const info=person.info.bind(person);
  info();
  
  