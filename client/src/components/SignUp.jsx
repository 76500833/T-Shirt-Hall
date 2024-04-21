import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../graphql/mutations';
function SignUp({isSignedUp, setIsSignedUp}) {
    const [signup, { data }] = useMutation(SIGNUP_MUTATION);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false); //for modal
    const handleSubmit = async (e) => {
        e.preventDefault();
        const uniqueUsername = `defaultUsername-${Date.now()}`;
        try {
            const stuff = await signup({ variables: { username: uniqueUsername, email, password } });
            console.log('What we got back: ', stuff);
        } catch (error) {
            console.error('Error signing up: ', error);
        }
        // const decoded = decode(stuff.token);
        // console.log("The token!", decoded);
        setIsOpen(false); 
        setIsSignedUp(true); // User is signed up
        console.log(isSignedUp)


    };
    let labelStyle = {
        backgroundColor: 'lightgreen'
    };//relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" style={{margin: "0px", color:"black"}}
    return (
        <>
            {/* Button to trigger the modal */}
            <label htmlFor="my_modal_7" className="btn relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" style={{fontWeight: "bold", color: "black"}}> Sign Up</label>

            {/* Checkbox input to control the modal state */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" checked={isOpen} onChange={() => {}}/>

            {/* Modal container */}
            <div className="modal" role="dialog">
                <div className="modal-box">

                    {/* The signup form */}
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        {/* Email input field */}
                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        {/* Password input field */}
                        <div className="mb-5">
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {/* Remember me checkbox */}
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

                    {/* Modal for authentication */}
                    <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* ... rest of your code ... */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Label to close the modal */}
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    );
}

// Exporting SignUp component
export default SignUp;