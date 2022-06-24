import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Login = () => {
  const {login} = useContext(AuthContext)
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState("2345789")

  const handleSubmit = (e) => {
    e.preventDefault()
    login({email, password})
  }

  return (
    <>
      <h1>Login Screen</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input required autoFocus value={email} onChange={(e)=> setEmail(e.target.value)} />
        <label>Password:</label>
        <input required autoFocus value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button type="submit">Log In</button>
      </form>
    </>
  )
}

export default Login