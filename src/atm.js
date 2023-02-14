const logger = require('../utils/logger');

const customers = {};
let currentCustomer = null;

const logIn = name => {
  if (!customers[name]) {
    customers[name] = { name, balance: 0 };
  }
  currentCustomer = customers[name];
  console.log(`Hello, ${currentCustomer.name}!`);
  logger.logBalance(currentCustomer.balance);
};

const deposit = amount => {
  currentCustomer.balance += amount;
  logger.logBalance(currentCustomer.balance);
};

const withdraw = amount => {
  currentCustomer.balance -= amount;
  logger.logBalance(currentCustomer.balance);
};

const transfer = (target, amount) => {
  customers[currentCustomer.name].balance -= amount;
  customers[target].balance += amount;
  logger.logTransfer(target, amount);
  logger.logBalance(currentCustomer.balance);
};

const logOut = () => {
  console.log(`Goodbye, ${currentCustomer.name}!`);
  currentCustomer = null;
};

module.exports = { logIn, deposit, withdraw, transfer, logOut };
