import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto my-10'>
            <h2 className='text-4xl font-semibold mt-6 mb-4'>When should use context api?</h2>
            <p>when I need to send data in the many components, I can use context API. there are simple three steps. first step: create and export context. second step: use context using useContext() hook. third step:  wrap children into the provider.</p>
            <h2 className='text-4xl font-semibold mt-6 mb-4'>What is custom hook in react?</h2>
            <p>A custom hook is a reusable function. it is created by the React developer. the developer uses add special and unique functionality to the react application.</p>
            <h2 className='text-4xl font-semibold mt-6 mb-4'>What is useref  and usememo hooks?</h2>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated.</p>
        </div>
    );
};

export default Blog;