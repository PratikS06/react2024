import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>
        Please log in to view your profile.
    </div>
    
    return <div>
        <h3> Welcome:{ user.username }</h3>
    </div>

}

export default Profile;
