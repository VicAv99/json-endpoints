const { faker } = require("@faker-js/faker");

module.exports = () => {
  const data = {
    members: [],
    comments: [],
  };

  // Create 50 members 25 males and 25 females as married couples with same last name, but different first names
  for (let i = 0; i < 25; i++) {
    const lastName = faker.person.lastName();
    function generateUser(sex) {
      const id = faker.string.nanoid(7);
      const firstName = faker.person.firstName(sex);
      data.members.push({
        id,
        firstName,
        lastName,
        email: faker.internet.email({ firstName, lastName, provider: "gmail" }),
        dob: faker.date.birthdate({ min: 18, max: 45, mode: "age" }),
      });

      // create comment for each member
      data.comments.push({
        id: faker.string.nanoid(7),
        memberId: id,
        text: faker.company.catchPhrase(),
      });
    }

    generateUser("male");
    generateUser("female");
  }

  return data;
};
