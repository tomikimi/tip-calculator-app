function Bill({ bill, onHandleBill }) {
  return (
    <>
      <div>
        <p>How much was the bill</p>
        <input type="text" value={bill} onChange={onHandleBill} />
      </div>
    </>
  );
}

export default Bill;
