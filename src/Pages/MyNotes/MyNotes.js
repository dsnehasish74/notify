import {auth,provider,db,storage} from '../../firebase.js'
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

const MyNotes=()=>{
    const [Note,setNote]=useState([]);
    useEffect(()=>{
        if(auth){
             db.collection('Notes').where('createdBy', '==', auth.currentUser.uid).get().then((querySnapshot) => {
                console.log(querySnapshot)
                let result=[];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    result.push({...doc.data(),id:doc.id});
                });

                setNote(result)

             // queryRef.then(())
        })

    }

    },[auth])
    return(
        <div className="note_container">
                {
                    Note.map((n)=>(
                        <Link key={n.id} to={"/note/"+n.id} className="link">
                        <div className="Note">
                        <p>23 June, 2017</p>
                        <h3>{n.name}<span className="rating" style={{marginLeft: 50}}>{[1,2,3,4].map((s)=><i className="far fa-star" style={{color:"#ffd700",marginLeft: 5}}></i>)}</span></h3>
                        <p className="author">posted by {n.authorName}</p>
                        <p className="note_description">{n.description}</p>
                        <p className="subject_tag">{n.subject}</p>
                    </div>
                    </Link>
                    ))
                }
            </div>
    );
}
export default MyNotes;