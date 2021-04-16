# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   Prop drilling through components that have no use for the props needed by lower components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- The `store` holds `state` and the `reducer` function, because state is held, set, and updated by and in the `store` truth, as accepted throughout all parts of the application using the state set by redux, is sourced from the `store`.

- A `reducer` function, in this context, takes state as an argument and depending on the action passed as argument returns a new state.

  - An `action` is an object who's properties are used by the reducer to set state. When an `action` is `dispatch`ed the reducer is invoked with the current state, the reducer will return a new state according to the `action.type`, and if the `action` provides a payload the reducer will apply the payload value to the new state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- `redux-thunk` allows us to dispatch functions that, conditionally return actions (action-creators) to the reducer. `redux-thunk` intercepts the dispatches and ensures that the reducer is dispatch and action object.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, because if it's going to be complicated I want all the features upfront, otherwise I'd prefer to keep it super simple. SOLVE FOR THE EXTREMES!
