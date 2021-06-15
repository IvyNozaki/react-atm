import React, { useState } from 'react';
import './styles.css';

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ['Deposit', 'Cash Back'];
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input 
        id="number-input" 
        type="number" 
        onChange={onChange}>
      </input>
      <input 
        class="btn-primary"
        type="submit" 
        value="Submit" 
        id="submit-input" 
        disabled={!isValid}>
      </input>
    </label>
  );
};

function App() {
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [atmMode, setAtmMode] = useState("");
  const [validTransaction, setValidTransaction] = useState(false);


  // How much money is in the account.
  let status = `Account Balance $ ${totalState} `;

  const handleChange = (e) => {
    // Gets the current value in the input.
    let money = e.target.value;

    // If the current value is less than or equal to zero, make sure they cannot do transaction.
    if (Number(money) <= 0) {
      setValidTransaction(false);
      return alert('Error: Invalid');
    }

    // If the transaction mode is Cash back and the current value is greater than what they have in the account, make sure they cannot do transaction.
    if (atmMode === "Cash Back" && money > totalState) {
      setValidTransaction(false);
      return alert('Error: Insufficient Funds');
    }

    setValidTransaction(true);

    setDeposit(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
  };

  const handleModeSelect = (e) => {
    // This will set the ATM mode based on the selection the user chose in the drop down.
    setAtmMode(e.target.value);

    // Checks the current selection of the drop down. If it is Deposit, then show the input on the bottom. 
    if (e.target.value === "Deposit") {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Balance Information */}
      <h2 id="total">{status}</h2>

      {/* Drop Down Selection */}
      <select 
        onChange={(e) => handleModeSelect(e)} 
        name="mode" 
        id="mode-select">
        <option id="no-selection" value="">Select an action below to continue</option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      
      {/* Conditional Rendering based on selection above */}
      {
        atmMode && 
        <ATMDeposit 
          onChange={handleChange} 
          isDeposit={isDeposit}
          isValid={validTransaction}
        ></ATMDeposit>
      }
    </form>
  );
}

export default App;
