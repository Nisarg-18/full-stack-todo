import AllTodos from "./components/AllTodos";

function MainComponent() {
  return (
    <div className="h-screen w-screen grid grid-cols-2">
      <div className="h-full w-full">
        <AllTodos />
      </div>
      <div className="h-full w-full">
        <TodoDisplay />
      </div>
    </div>
  );
}

export default MainComponent;
