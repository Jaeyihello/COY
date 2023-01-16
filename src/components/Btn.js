function Btn({ text, fontsize = 12 }) {
    return (
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          border: 0,
          borderRadius: 10,
          fontsize,
          margin: "4px",
        }}
      >
        {text}
      </button>
    );
  }
  export default Btn;