export const InlineStyle = () => {
  //注意点としては以下。
  // ①文字列として扱われるので””で囲う必要がある。
  // キャメルケースで記述する必要がある。

  const containerStyle = {
    border: "solid 5px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    borderRadious: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>Fight!</button>
    </div>
  );
};
