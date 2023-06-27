import React from "react"
import './login.css'
import {Form, redirect, useActionData, useNavigation} from "react-router-dom"
import { loginUser } from "../getVans"


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
// THIS CODE IS USE TO WRITE MESSAGE 
export function loader({ request }){
    return new URL(request.url).searchParams.get('message')
}

export async function action({ request }){
    await sleep(1000)
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    try{
        const data = await loginUser({email, password})
        localStorage.setItem('loggedin', true)
        return redirect('host')
    }
    catch(err){
        return err.message
    }
}

export default function Login() {

    const errMessage = useActionData()
    const navigation = useNavigation()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {/* {message && <h3 className="red">{message}</h3>}*/}
            {errMessage && <h3 className="red">{errMessage}</h3>} 
            <Form method="post" className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'idle' ? 'Login' : 'Logging In'}
                </button>
            </Form>
        </div>
    )

}


// import React from "react"
// import './login.css'
// import { useLoaderData, useNavigate} from "react-router-dom"
// import { loginUser } from "../getVans"

//THIS CODE IS USE TO WRITE MESSAGE 
// export function lader({ request }){
//     return new URL(request.url).searchParams.get('message')
// }

// export default function Login() {
//     const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
//     const [status, setStatus] = React.useState('idle')
//     const [error, setError] = React.useState(null)

//     const navigate = useNavigate()

//     const message = useLoaderData()

//     function handleSubmit(e) {
//         e.preventDefault()
//         setStatus('submitting')
//         setError(null)
//         loginUser(loginFormData)
//             .then(data => {
//                 navigate('/host')
//             })
//             .catch(err => setError(err))
//             .finally(()=> setStatus('idle'))
//         console.log(status)
//     }

//     function handleChange(e) {
//         const { name, value } = e.target
//         setLoginFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     return (
//         <div className="login-container">
//             <h1>Sign in to your account</h1>
//             {message && <h3 className="red">{message}</h3>}
//             {error && <h3 className="red">{error.message}</h3>}
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input
//                     name="email"
//                     onChange={handleChange}
//                     type="email"
//                     placeholder="Email address"
//                     value={loginFormData.email}
//                 />
//                 <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     placeholder="Password"
//                     value={loginFormData.password}
//                 />
//                 <button disabled={status === 'submitting'}>
//                     {status === 'idle' ?
//                     'Log in' :
//                     'Logging in..'
//                 }
                
//                 </button>
//             </form>
//         </div>
//     )

//}