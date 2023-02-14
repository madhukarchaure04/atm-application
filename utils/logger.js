const logBalance = (balance) => {
  console.log(`Your balance is $${balance}`);
};

const logTransfer = (target, amount) => {
  console.log(`Transferred $${amount} to ${target}`);
}

module.exports = {logBalance, logTransfer};
