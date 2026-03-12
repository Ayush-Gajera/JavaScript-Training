import { useRef, useReducer } from "react";

type CounterState = { count: number };
type CounterAction = { type: "INCREMENT" | "DECREMENT" | "RESET" };

function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}



export default function HooksDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [counter, dispatchCounter] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <h1>Hooks Demo</h1>
      <h2>useRef — Focus Input</h2>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
      <h2>useReducer — Counter</h2>
      <p>{counter.count}</p>
      <div>
        <button onClick={() => dispatchCounter({ type: "DECREMENT" })}>
          -
        </button>
        <button onClick={() => dispatchCounter({ type: "RESET" })}>
          Reset
        </button>
        <button onClick={() => dispatchCounter({ type: "INCREMENT" })}>
          +
        </button>
      </div>

     </div>
  );
}
