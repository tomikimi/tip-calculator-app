import { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import Service from "./Service";
import BillServiceCalc from "./BillServiceCalc";
import Reset from "./Reset";

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

  function handleReset() {
    const confirm = window.confirm(
      `Are you sure you want to reset the Calculator... 🤔`,
    );

    if (confirm) {
      setBill(0);
      setService(0);
      setFriendTip(0);
    }
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
      <Reset handleReset={handleReset}></Reset>
    </>
  );
}

export default App;
