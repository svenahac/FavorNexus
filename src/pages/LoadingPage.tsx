import { Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { CurrentSession, supabase } from "../functions/supabase"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"

export default function Home() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <LoginPage/> : <HomePage session={session} key={session.user.id}  />}
    </div>
  )
}