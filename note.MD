# useSelector:- only read values

# useDispatch:- write/ change values

1. make a folder store.
2. make another folder called slice to keep indiviual slice(of what you need like user, product etc)
3. slice ma name ma k xa tyo store.js ma lekhne. like:-
   name: "counter", (in counterSlice.js)
   (in store.js)
   reducer: {
   count: countReducer,
   },
4. import countReducer from counterSlice but keep counterReducer name.
5. to read, use from where you want to read:-
   const values = useSelector((state) => state.count);
6. to write or change, use dispatch and use it as a function.
   const dispatch = useDispatch();
   onClick={() => dispatch(decrementCount())}
   add function in reducer in slice and it performs what ever there is.
   reducers: {
   incrementCount: (state, action) => {
   state.count = state.count + 1;
   },
   decrementCount: (state, action) => {
   state.count = state.count - 1;
   },
   resetCount: (state, action) => {
   state.count = 0;
   },
   },

# IMP

.filter((item) => item.id !== itemId);
