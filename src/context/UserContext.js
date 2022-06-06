import { useContext, createContext, useState } from 'react'

const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

const token = {
  email: "jeyther13@gmail.com",
  familyName: "Yriza",
  givenName: "Jeyther",
  googleId: "116358547637120705421",
  imageUrl: "https://lh3.googleusercontent.com/a-/AOh14Ghhhn7sBYNWUgFg9xHm-ADAUE4LNBDh4VBFpxmSGg=s96-c",
  name: "Jeyther Yriza"
}

export default function UserContextProvider({ children }) {
  const [profile, setProfile] = useState(token)
  // const [profile, setProfile] = useState(
  //   () => JSON.parse(window.localStorage.getItem('profile'))
  // )

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  )
}
