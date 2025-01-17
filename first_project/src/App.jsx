const App = () => {
  let x = 0;
  const btnClick = () => {
    console.log("clicked");
    x++;
    console.log(x);
  }

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
