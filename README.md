# React Refactoring ATM

---

## **Description**

A React application that allows you to make "Deposits" or "Cash Back" withdrawals changes to an account's balance.
![start up on Desktop mode](/src/assets/Desktop.png)

---

## **How to run**

**Default Mode**
Upon startup the application is set to a "null" ATM mode. This will show just a drop down menu. An ATM mode selection is required to access more of the application features.
![start up on Mobile mode](/src/assets/Mobile.png)

**Deposit Mode**
This selection mode will render an input field which you can set the cash value you wish to add to the account balance. Click submit to confirm changes to account.
![Deposit mode](/src/assets/Deposit.png)

**Cash Back Mode**
This selection mode will render an input field which allows you to withdraw the set cash value from the account balance. You cannot withdraw a cash value greater than the account balance; doing so will prompt an alert for "Insufficient Funds". Click submit to confirm changes to account.
![Cash Back mode](/src/assets/CashBack.png)

## **Road Map**

1. Create components for multiple account use.
   - `i.e., savings, checking accounts and one for account/s history.`
2. Add an alert, `"Insufficient Funds"`, when cash input exceeds balance total.
   - create limit for cash input. It should have an alert for insufficient funds and resets input field back to `'0'`.
     ![Error Alert for Insufficient Funds](/src/assets/Error_Insufficient_Funds.png)
3. Disable negative numbers in the input field. It should only be `'0'` and `above`.
   ![Error Alert for Invalid transaction](/src/assets/Error_Invalid.png)

---

## **Licenses**

- MIT
- Custom logo created using Procreate.
- Custom styling and code using HTML, CSS, JavaScript, React and Babel.
