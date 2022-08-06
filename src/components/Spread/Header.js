const Header = () => {
  const headers = ["Team", "Spread", "Locked", "Rank"];

  return (
    <div className="header-cont white-text">
      {headers.map((header) => (
        <h2 key={header}>{header}</h2>
      ))}
    </div>
  );
};

export default Header;
