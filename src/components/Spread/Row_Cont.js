const Row_Cont = ({ number, onChange }) => {
  const columns = ["name", "spread", "locked", "rank"];

  //   const set = setObj[`setTeam${number}`];

  return (
    <div className="row-cont">
      {columns.map((column) => (
        <div key={column} className={`${column}-cont`}>
          <input
            className={column !== "lockwd" ? "center bold" : ""}
            type={column === "locked" ? "checkbox" : ""}
            onChange={(ev) => onChange(number, column, ev.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Row_Cont;
