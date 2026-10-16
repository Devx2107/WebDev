function createAccount(owner, initialBalance = 0) {
    let balance = initialBalance;        // private: no way to touch it from outside
    const history = [];                  // private transaction log

    function record(type, amount) {
        history.push({ type, amount, balance });
    }

    return {
        deposit(amount) {
            if (typeof amount !== "number" || amount <= 0) {
                console.log("Invalid deposit amount");
                return;
            }
            balance += amount;
            record("deposit", amount);
            console.log(`${owner} deposited ${amount}. Balance: ${balance}`);
        },

        withdraw(amount) {
            if (typeof amount !== "number" || amount <= 0) {
                console.log("Invalid withdrawal amount");
                return;
            }
            if (amount > balance) {
                console.log(`Insufficient funds. Balance: ${balance}`);
                return;
            }
            balance -= amount;
            record("withdraw", amount);
            console.log(`${owner} withdrew ${amount}. Balance: ${balance}`);
        },

        getBalance() {
            return balance;
        },

        getHistory() {
            return [...history];         // return a copy so callers can't edit the real log
        }
    };
}

const acc = createAccount("Dev", 1000);
acc.deposit(500);
acc.withdraw(200);
acc.withdraw(5000);
acc.deposit(-50);
console.log("Final balance:", acc.getBalance());
console.log(acc.balance);                // undefined: private
acc.balance = 999999;                    // just adds a useless property, the real balance is untouched
console.log("Still:", acc.getBalance());
console.log(acc.getHistory());

const other = createAccount("Mayank");   // independent account
other.deposit(100);
console.log(acc.getBalance(), other.getBalance());