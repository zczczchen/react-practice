function App() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleOnMouseOver() {
    console.log("MouseOver!");
  }

  /**
   * Add our new function to the button
   */

  /**
   * Challenge:
   * Log something to the console when the mouse hovers over the image
   */

  return (
    <div className='container'>
      <img
        onMouseOver={handleOnMouseOver}
        src='https://picsum.photos/640/360'
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
