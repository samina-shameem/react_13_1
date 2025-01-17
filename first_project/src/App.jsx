const App = () => {
  let x = 0;
  const btnClick = () => {
    console.log("clicked");
    x++;
  };

  return (
    <div>
      {x}
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
