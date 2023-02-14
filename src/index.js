const { logIn, deposit, withdraw, transfer, logOut } = require('./atm');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const [command, ...args] = input.split(' ');
  switch (command) {
    case 'login':
      logIn(args[0]);
      break;
    case 'deposit':
      deposit(parseInt(args[0]));
      break;
    case 'withdraw':
      withdraw(parseInt(args[0]));
      break;
    case 'transfer':
      transfer(args[0], parseInt(args[1]));
      break;
    case 'logout':
      logOut();
      break;
    default:
      console.log(`Unknown command: ${command}`);
      break;
  }
});

