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

export default BillServiceCalc;
