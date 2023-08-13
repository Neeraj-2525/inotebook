import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from './Loader';

const Profile = () => {

    const context = useContext(noteContext);
    const { notes, getUserData, userData, getNotes, loading } = context;

    // useEffect(()=>{
    //     getUserData();
    //     getNotes();
    // })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUserData();
            getNotes();
        }
        else {
            console.log("Some error occurred")
        }
        // eslint-disable-next-line
    }, [])


    // TO CAPITALIZE FIRST LETTER OF A WORD
    function capitlizeText(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <> 
        {loading && <Loader/>}
        {!loading && (
            <section className="vh-100 userProfileContainer m-l-r-t-b">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center  align-items-center h-100">
                        <div className="col-md-12 col-xl-10">

                            <div className="card userProfileCard">
                                <div className="card-body text-center">
                                    <div className="mt-3 mb-4">
                                        <LazyLoadImage effect="blur" src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${userData.gender === 'female' ? '1' : '6'}-bg.webp`}
                                            className="rounded-circle img-fluid" style={{ width: '100px' }} alt='profile' />
                                    </div>
                                    <h4 className="mb-2">{capitlizeText(userData.name)}</h4>
                                    <p className="text-muted mb-4">I am a <em>{capitlizeText(userData.occupation)}</em> <span className="mx-2">|</span>{userData.email} </p>

                                    <div>
                                        <p className="mb-2 h5">{notes.length}</p>
                                        <p className="text-muted mb-0">Total Notes</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )}
        </>
    )
}

export default Profile
