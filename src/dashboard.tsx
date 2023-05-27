import { Session } from "@supabase/supabase-js";

interface CurrentSession {
	session: Session;
	key: string;
}

const Dashboard:React.FC<CurrentSession> = ({session, key}) => {
	
	return (<div>Ha ha!</div>)
}

export default Dashboard;
