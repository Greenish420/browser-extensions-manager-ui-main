


function Header() {


  return (
    <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%", backgroundColor: "#212636", borderRadius: "15px", padding: "15px", boxSizing: 'border-box' }}>
      <div>
        <img src="/images/logo.svg" alt="" />

      </div>

      <button className='darkMode' style={{ backgroundColor: "#2f364b", width: "3em", height: "3em", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px" }}>
        <img src="/images/icon-sun.svg" alt="" style={{ scale: "3" }} />
      </button>
    </div>
  );
}

export default Header;