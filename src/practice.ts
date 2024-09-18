enum personType {
  account,
  user,
}

type account = {
  accountType: personType.account,
  accountId: number;
  firstName: string;
  lastName: string;
};

type user = {
  accountType: personType.user,
  userId: number;
  firstName: string;
  lastName: string;
};

type person = account | user;

const createPerson = (p: person): person => {
  return p;
};

// form component
const userId = 1;
const accountId = 2;
const accountType: personType = personType.user;

let createdPerson: person;

if (accountType === personType.user) {
  createdPerson = createPerson({
    accountType,
    userId: userId,
    firstName: "firstName",
    lastName: "lastName",
  });
} else {
  createdPerson = createPerson({
    accountType,
    accountId: accountId,
    firstName: "firstName",
    lastName: "lastName",
  });
}

if (createdPerson.accountType === personType.user) {
  console.log(createdPerson.userId);
} else {
  console.log(createdPerson.accountId);
}
