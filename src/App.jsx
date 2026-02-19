import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleService(e) {
    setService(e.target.value);
  }

  function handleFriendService(e) {
    setFriendTip(e.target.value);
  }

  function handleBill(e) {
    setBill(e.target.value);
  }

  return (
    <>
      <Bill bill={bill} onHandleBill={handleBill}></Bill>
      <Service service={service} onHandleService={handleService}>
        <p>How did you like the service?</p>
      </Service>
      <Service service={friendTip} onHandleService={handleFriendService}>
        <p>How did your friend like the service?</p>
      </Service>
      <BillServiceCalc
        bill={bill}
        serviceTip={service}
        friendTip={friendTip}
      ></BillServiceCalc>
    </>
  );
}

function Bill({ bill, onHandleBill }) {
  return (
    <>
      <div>
        <p>How much was the bill</p>
        <input type="" value={bill} onChange={onHandleBill} />
      </div>
    </>
  );
}

function Service({ service, onHandleService, children }) {
  return (
    <>
      <div>
        {children}
        <select value={service} onChange={onHandleService}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">it was okay (5%)</option>
          <option value="10">it was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

function BillServiceCalc({ bill, serviceTip, friendTip }) {
  let totalBill = 0;
  let tipCalculator = 0;
  const billAmount = Number(bill);
  if (serviceTip > 0 || friendTip > 0) {
    tipCalculator = Math.floor(
      ((bill * serviceTip) / 100 + (bill * friendTip) / 100) / 2,
    );

    totalBill = billAmount + tipCalculator;
  }
  return (
    <>
      <div>
        {billAmount === 0 ? (
          <p style={{ fontWeight: "bold" }}>No Tip Given 🙁 </p>
        ) : (
          <p>
            <em>{`You pay $${totalBill} ($${billAmount} + ${tipCalculator} tip) 🫡`}</em>
          </p>
        )}
      </div>
    </>
  );
}

export default App;
