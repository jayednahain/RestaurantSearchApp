# View vs </> (Fragment)"

<!-- <img src="ProjectImage.png" width="200"/> -->
##  View
Adds a Wrapper in the Native View Hierarchy: This means it adds a layer in the rendered UI (a physical container in the app's view tree).

#### CODE
```js
const Example = () => (
    <View>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
    </View>
);
```

#### Virtual DOM:
```mathematica
Root
 ├── View
      ├── Text: "Item 1"
      ├── Text: "Item 2"
```
#### Rendered UI:
```
<View>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</View>
```


## </> Fragment
Does Not Add a Wrapper: It’s purely logical and doesn’t appear in the rendered output.
#### No Extra Node in the UI Tree:
- Fragments group multiple child components without creating a visible container element (like a View, div, etc.). 
- They don’t add any element to the rendered view hierarchy in React Native (or DOM in React for the web).
- This avoids cluttering the native UI tree with unnecessary nodes, improving performance and simplifying layouts.

#### Why This Matters:
- **Fragments prevent adding unnecessary UI nodes, which can slow down rendering, especially in deeply nested or large lists.**
- **When you don’t need an actual container (like a View), fragments ensure the layout stays clean and minimal.**
- **The fragment signals to React: "Hey, treat these elements as grouped siblings, but don't wrap them in anything visible."**
- **React handles the grouping internally in its reconciliation algorithm and skips creating an actual node.**

#### How Fragments Work
- Virtual DOM Grouping:
    - React uses the **virtual DOM** to represent the UI.
    - When you use a <Fragment> (or <>...</> shorthand), React logically groups the child elements in memory in the virtual DOM but doesn't include a container node in the actual rendered UI.
- Render Directly:
    - During rendering, React takes the grouped children and renders them as if the fragment doesn't exist, directly inserting the children into the parent node.
    - This way, the children are treated as siblings in the actual UI hierarchy.

#### in Code
```js
// in code
const Example = () => (
    <>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
    </>
);
```
#### Virtual DOM Representation:
```mathematica
Root
 ├── Text: "Item 1"
 ├── Text: "Item 2"
```
- The fragment itself doesn’t appear in the virtual DOM or native tree
- The Text elements are treated as direct children of the parent component.
#### Rendered Native UI:

```mathematica
<Text>Item 1</Text>
<Text>Item 2</Text>
```


