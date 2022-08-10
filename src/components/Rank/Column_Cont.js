const Column_Cont = ({ rankInfo, column }) => {
  return (
    <div className="column-cont">
      {rankInfo && rankInfo.length && (
        <h2 className="white-text">
          {column && column === "name" ? "Team" : "Rank"}
        </h2>
      )}

      {rankInfo &&
        rankInfo.map((team, idx) => (
          <input
            key={idx}
            className={`${column && column}-cont`}
            value={team[column && column]}
            readOnly
          ></input>
        ))}
    </div>
  );
};

export default Column_Cont;
