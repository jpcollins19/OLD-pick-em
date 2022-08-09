const Row_Cont = ({ number, onChange }) => {
  const columns = ["lastTeam", "name", "spread", "locked", "rank"];

  return (
    <div className="row-cont">
      {columns.map((column) => (
        <div key={column} className={`${column}-cont`}>
          <input
            className={column !== "lockwd" ? "center bold" : ""}
            type={
              column === "locked" || column === "lastTeam" ? "checkbox" : ""
            }
            onChange={(ev) => onChange(number, column, ev.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Row_Cont;
