import React from "react";
import { Container } from "react-bootstrap";
const Blog = () => {
    return (
        <Container className="mt-5 mb-5">
            <div>
                <h2>Wheh should you use context API?</h2>
                <p>
                    React Context API is used to share data between components
                    without having to pass props down manually at every level.
                    This makes it easier to share data between components and
                    can help to improve the readability and maintainability of
                    your code. You should use the Context API when you need to
                    share data between components that are not directly
                    connected to each other.You can use it when all you want is
                    simple state management, or in cases where you want to pass
                    some props deeply without the overkill that comes with
                    Redux.
                </p>
            </div>
            <div>
                <h2>What is Custom hook in React?</h2>
                <p>
                    Custom hooks are used in React to separate logic from user
                    interface. Customs hooks are normal JavaScript functions
                    whose names start with “use” and can call other hooks.
                    Custom hooks are reusable in many different components with
                    the same processing logic, so the logic only needs to be
                    fixed in one place if it changes. The main reason to use
                    custom hooks is to maintain the concept of DRY in React
                    apps.
                </p>
            </div>
            <div>
                <h2>What is useRef and why we need it in React?</h2>
                <p>
                    The useRef hook is a React hook that returns a mutable ref
                    object whose current property is initialized with the passed
                    argument. useRef is useful for persisting mutable data
                    between component renders. useRef returns a mutable ref
                    object whose current property is initialized to the passed
                    argument. The purpose of this hook is to interact with DOM
                    elements like accessing the input element value or focusing
                    on the input element. useRef is mainly used for creating a
                    reference of the DOM element or directly accessing it inside
                    a functional component. You can use useRef to store a
                    mutable value that does not cause a re-render when updated.
                    It can also be used to access a DOM element directly.
                </p>
            </div>
            <div>
                <h2>What is useMemo and why we need it in React?</h2>
                <p>
                    The useMemo hook is a React hook that returns a memoized
                    value. Memoization is a technique for caching the result of
                    a computation so that it does not need to be recalculated on
                    every render. useMemo can also help you optimize the
                    performance of re-rendering child components. By default
                    when a component rerenders, React rerenders all its
                    children, this is why then our page keeps stuck. useMemo is
                    used to avoid costly operations or preserve references. You
                    can use useMemo to improve the performance of your React
                    components by caching the results of expensive computations.
                </p>
            </div>
        </Container>
    );
};

export default Blog;
