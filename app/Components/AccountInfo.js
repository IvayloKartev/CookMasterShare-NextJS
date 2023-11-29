import '../App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function AccountInfo({name, email, password, signOut, unshowAccount}){
    password = "*********";
    return (
        <section id="accountinfo">
            <h1 className="text-white">Profile info</h1>
            <div className='hr'></div>
            <label className="text-white"><h2>Name: <span className="badge badge bg-secondary">{name}</span></h2></label>
            <br/>
            <label className="text-white"><h2>Email: <span className="badge badge bg-secondary">{email}</span></h2></label>
            <br/>
            <label className="text-white"><h2>Password: <span className="badge badge bg-secondary">{password}</span></h2></label>
            <button className='btn btn-warning' onClick={() => {signOut(); unshowAccount();}}>Sign Out</button>
        </section>
    )
}