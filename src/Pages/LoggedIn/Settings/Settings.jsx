import { CgProfile } from 'react-icons/cg';
import './Settings.css';
import Interests from '../../../Components/Interests/Interests';

function Settings () {
    
    return (
        <div id='settings-display' style={{display:'flex',}}>

            <div id='settings-left' style={{width:'50%' }}>

                <div id='settings-title' style={{marginBottom:'10px'}}>
                    <h2>Update Your Profile</h2>
                </div>
            
                <form id='settings-form'>

                    <div id='settings-profile-pic'>

                        <label htmlFor='profile-pic-input' style={{cursor:'pointer', width:'70%', display:'flex', alignItems:'center',}} >

                            <div id='change-profile-pic' >
                                <CgProfile size={20} />

                            </div>

                            <p style={{fontSize:'14px', margin:'0px 10px'}}>Change your profile picture</p>
                        </label>
                        
                        <input type='file' id='profile-pic-input' style={{display:'none'}}/>

                    </div>

                    <div id='profile-update'>
                        <input type='text' placeholder='Enter Username'/>
                    </div>

                    <div id='profile-update'>
                        <input type='email' placeholder='johnny@email.com'/>
                    </div>


                    <div id='change-password'>
                        Change Password
                        <div id='profile-update'>
                            <input type='password' placeholder='Current Password'/>
                        </div>

                        <div id='profile-update'>
                            <input type='password' placeholder='New Password'/>
                        </div>

                        <div id='profile-update'>
                            <input type='password' placeholder='Confirm New Password'/>
                        </div>               

                    </div>

                            <div id='update-profile' style={{width:'90%', display:'flex', justifyContent:'center',}}>

                                <div id='updatesettings-btn'><p>Update</p></div> 
                            </div>

                </form>

            </div>

            <div id='settings-right' style={{width:'50%'}}>
                <Interests/>
            </div>

        </div>
    )
};

export default Settings;