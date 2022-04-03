# When to **useLayoutEffect** Instead of useEffect

## **The Difference Between useEffect and useLayoutEffect**

### It’s all in the timing.

### `useEffect` runs _asynchronously_ and after a render is painted to the screen.

### So that looks like:

### 1.  You cause a render somehow (change state, or the parent re-renders)
### 2.  React renders your component (calls it)
### 3.  The screen is visually updated
### 4.  THEN `useEffect` runs

<br/>

### `useLayoutEffect`, on the other hand, runs _synchronously_ after a render but before the screen is updated. That goes:

### 1.  You cause a render somehow (change state, or the parent re-renders)
### 2.  React renders your component (calls it)
### 3.  `useLayoutEffect` runs, and React waits for it to finish.
### 4.  The screen is visually updated

<br/>

## **When to useLayoutEffect**

### **If your component is flickering** when state is updated – as in, it renders in a partially-ready state first and then immediately re-renders in its final state – that’s a good clue that it’s time to swap in `useLayoutEffect`.

---

# Reference
- ## [When to useLayoutEffect Instead of useEffect](https://daveceddia.com/useeffect-vs-uselayouteffect/)
- ## [Difference between useEffect and useLayoutEffect](https://codesandbox.io/s/useeffect-18s01e)
- ## [Should You Really Use useMemo in React?](https://medium.com/swlh/should-you-use-usememo-in-react-a-benchmarked-analysis-159faf6609b7)
- ## [Performance Profling](https://ithelp.ithome.com.tw/articles/10279567)
- ## [React 18: useTransition() vs useDeferredValue()](https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue)
