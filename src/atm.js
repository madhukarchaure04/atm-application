const customers = {};
let currentCustomer = null;

const logIn = name => {
  if (!customers[name]) {
    customers[name] = { name, balance: 0 };
  }
  currentCustomer = customers[name];
  console.log(`Hello ${currentCustomer.name}.`);
};

const deposit = amount => {
  currentCustomer.balance += amount;
  console.log(`Your balance is $${currentCustomer.balance}.`);
};

const withdraw = amount => {
  currentCustomer.balance -= amount;
  console.log(`Your balance is $${currentCustomer.balance}.`);
};

const transfer = (target, amount) => {
  customers[currentCustomer.name].balance -= amount;
  customers[target].balance += amount;
  console.log(`Your balance is $${currentCustomer.balance}.`);
};

const logOut = () => {
  currentCustomer = null;
};

module.exports = { logIn, deposit, withdraw, transfer, logOut };
