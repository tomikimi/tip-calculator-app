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

export default Service;
