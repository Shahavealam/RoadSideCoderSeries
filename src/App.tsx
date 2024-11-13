import './App.css'
import Counter from './components/Counter'
function App() {
  return (
    <>
      <Counter />
      <h2>Redux Interview Questions in React</h2>
      <h4>
        <u>Question 1: What is Redux?</u>
      </h4>
      <p>
        Redux is a state management library often used with React. It helps in
        managing the application state in a predictable way by centralizing the
        state in a single store, enabling easy debugging and testing.
      </p>

      <h4>
        <u>Question 2: How does the redux state management works?</u>
      </h4>

      <p>Redux is a popular state management library for JavaScript applications, especially those built with React. It helps manage the state of an entire application in a predictable and organized way, particularly as the app grows in size and complexity</p>

      <h3>Key Concepts in Redux</h3>
      <h5>State:</h5>
      <p>
        In Redux, the state represents the single source of truth for the entire application. It's stored in a single JavaScript object called the store.
        The state contains all the data or UI states that components in your application need to function, and it can only be modified in a specific way.
      </p>

      <h5>Store:</h5>

      <p>The store holds the application state. Redux allows only one store per application, which ensures consistency.
        The store provides three main methods:
        getState(): Returns the current state of the app.
        dispatch(action): Sends an action to the store to modify the state.
        subscribe(listener): Registers a listener that will be invoked whenever the state changes.
      </p>

      <h5>Actions:</h5>

      <p>Actions are plain JavaScript objects that describe what happened in the application.
        They have a type field (usually a string) and may also contain a payload with additional data.
        Example of an action:
        <pre>
          <code>
            {/* {
              type: 'INCREMENT',
            payload: {
              value: 1
                }
            } */}
          </code>
        </pre>
      </p>

      <h5>Reducers:</h5>

      <p>A reducer is a pure function that takes the current state and an action as arguments, then returns a new state based on the action.
        Reducers specify how the application's state changes in response to an action.
        They do not modify the existing state directly, but instead return a new state object.
      </p>
      <pre>
        <code>
          {/* const counterReducer = (state = {count: 0 }, action) => {
              switch (action.type) {
              case 'INCREMENT':
              return {count: state.count + action.payload.value };
              case 'DECREMENT':
              return {count: state.count - action.payload.value };
              default:
              return state;
              }
              }; */}
        </code>
      </pre>


      <h5>Dispatch:</h5>

      <p>Dispatching an action is how you trigger a state change in Redux.
        When an action is dispatched, it is sent to the reducer(s), which then determine how the state should be updated based on the action's type.
        Example of dispatching an action:
      </p>

      {/* <pre>
        <code>
          store.dispatch({type: 'INCREMENT', payload: {value: 1 } });
        </code>
      </pre> */}

      <h5>Selectors:</h5>

      <p>Selectors are functions that extract specific pieces of data from the Redux state. They help in avoiding duplication of logic and ensure that data retrieval is easy to manage.
        Example of a selector:
      </p>

      {/* <pre>
      const selectCount = (state) => state.count;
      </pre> */}

      <h5>Redux Data Flow</h5>

      <p>
        Redux follows a unidirectional data flow:

        Dispatching an Action:

        A user interacts with the UI, which may trigger an action. This action is dispatched using store.dispatch(action).
        Action Processed by Reducers:

        Redux forwards the action to the reducer(s). The reducers check the type of the action and update the state accordingly, producing a new state.
        State Update and Re-render:

        The store holds the new state, and any subscribed components or listeners are notified that the state has changed.
        The UI is re-rendered with the new state, reflecting the changes.
      </p>

    </>
  )
}

export default App
