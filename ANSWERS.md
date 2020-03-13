- [x] Why would you use class component over function components (removing hooks from the question)?

If there is a particular react library method that you want to use over a hook or custom hook, you'll want to use a class componenent, as that's the only way to access it.

- [x] Name three lifecycle methods and their purposes.

componentDidMount – runs code once component has been loaded completely (occurs after state is initialized and page is rendered for the first time)
componentDidUpdate – allows user to manually check for changes to state and run code when it does change.
componentWillUnmount – allows user to empty their event listeners upon leaving the component so that they are not still active when going to other pages.

- [x] What is the purpose of a custom hook?

A custom hook allows the user to reuse logical state functions they have written in other components.

- [x] Why is it important to test our apps?

Testing ensures quality of product by creating ways to make sure any user input will lead to the proper output.