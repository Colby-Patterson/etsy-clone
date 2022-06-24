import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home