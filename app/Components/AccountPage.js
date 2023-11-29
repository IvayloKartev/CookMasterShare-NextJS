'use client'

import '../App.css';
import Header from './Header';
import SidePanel from './SidePanel';
import AccountInfo from './AccountInfo';
import Favourites from './Favourites';
import NewRecipe from './AddNewRecipe';
import MyRecipes from './MyRecipes';

export default function AccountPage({type, name, email, password, signOut, unshowAccount, addToDB, isAccount, favorites}){
    return (
        <>
            <Header loginBtn={type} isLogin={isAccount}/>
            <main className="profile-content">
                <SidePanel name={name}/>
                <section className='accountinfo'>
                    <AccountInfo name={name} email={email} signOut={signOut} unshowAccount={unshowAccount}/>
                    <section id="favorites">
                        <h1 className="text-white">Favourites</h1>
                        <div className='hr'></div>
                        <Favourites favorites={favorites}/>
                    </section>
                    <MyRecipes cards={null}/>
                    <NewRecipe addToDB={addToDB}/>                   
                </section>
            </main>
        </>
    )
}