import {useState,useEffect} from 'react';
import {auth,provider,db,storage} from '../../firebase.js'
import { Redirect,router } from "react-router-dom";
const Upload=(props)=>{
	const [name,setName]=useState("");
	const [Description,setDescription]=useState("");
	const [Subject,setSubject]=useState("");
	const[uploaded,setUploaded]=useState(false);
	const [uploadedId,setUploadedId]=useState(false);
	const handelChange=(()=>{
		if(auth.currentUser){
			db.collection("Notes").add({
				name: name,
				description: Description,
				subject: Subject,
				createdAt: new Date(),
				resources: [],
				createdBy: auth.currentUser.uid,
				authorName:auth.currentUser.displayName,
			}).then((e)=>{
				setUploaded(true);
				setUploadedId(e.id);
			}).catch((error)=>{
				console.log(error);
			})
		}
	})
	console.log(auth.currentUser.uid)
	if(uploaded && uploadedId)return <Redirect to={"/note/"+uploadedId}/>
	return(
	 <div className="create_form">
	 	<div>
	 		<h3>Create a Note</h3>
	 	</div>
		<div className="name_field">
			<label>Project Name</label>
			<input type="text" placeholder="Name" onChange={((e)=>
					setName(e.target.value)
				)}/>
		</div>
		<div className="name_field">
			<label>Project Description</label>
			<textarea onChange={((e)=>
					setDescription(e.target.value)
				)} />
		</div>
		<div className="name_field">
			<label>Subject</label>
			<input type="text" placeholder="Subject" onChange={((e)=>
					setSubject(e.target.value)
				)}/>
		</div>
		<div><button className="upload_button" onClick={handelChange}>Create</button></div>

	</div>)
}

export default Upload;