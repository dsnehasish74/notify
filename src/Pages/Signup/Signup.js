import {auth,provider,db,storage} from '../../firebase.js'
import Signin from '../images/signin.svg'

const Signup=()=>{
	const signin = () => {
        auth.signInWithPopup(provider).then(()=>{
        	db.collection("Users").doc(auth.currentUser.uid).get().then((doc)=>{
        		  console.log(doc.exists)
        		if(doc.exists){
        			console.log("Welcome");
        		}else{
        			db.collection("Users").doc(auth.currentUser.uid).set({
        				name: auth.currentUser.displayName,
        				id: auth.currentUser.uid,
        				favourites: []
        			})
        		}
        	})
        }).catch(alert);
    }

	return (
		<div className="signin s_c" >
			<div className="Note signin" style={{height: 400}}>
			<img className="svg_img" src={Signin}/>
			<h3>Signin</h3>
			<button className="Signin_button"
	                onClick={signin}>Sign In with Google<i className="fab fa-google" style={{marginLeft: 10}}></i></button>
	         </div>
          </div>
	);

}

export default Signup;