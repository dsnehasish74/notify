import {useRef,useState,useEffect} from 'react'
import FileUploader from "react-firebase-file-uploader";
import {auth,provider,db,storage} from '../../firebase.js'
const Note=(props)=>{
	const id=props.match.params.id
	const pdfRef= useRef()
    const inRef= useRef()
    const [website,setWebsite] = useState([]);
    const [noteDate,setnoteData]=useState()
    const viewPdf =(filename)=>{
    storage
    .ref("application/pdf")
    .child(filename)
    .getDownloadURL()
    .then(url =>{ 
    	db.collection("Notes").doc(id).collection("Resources").doc().set({
    		url: url,
    		name: "Note"+website.length
    	}).then(()=>{
    		console.log("Done");
    	})
    });
    }


    useEffect(()=>{
    	if(auth){
    		db.collection("Notes").doc(id).collection("Resources").onSnapshot(({docs})=>{
    			var surl=[];
    			docs.forEach(doc=>{
    				surl.push(doc.data());
    			})

    			setWebsite(surl);
    		})
    		db.collection("Notes").doc(id).get().then((doc)=>{
    				setnoteData(doc.data());
    		})

    	}
    },[])
	return(
	<div>

        <div className="Feature-container">

            <div className="feature-text">
                <h1>{noteDate?noteDate.name:null}</h1>
                <p>{noteDate?noteDate.description:null}</p>
                 <div>
         
        <FileUploader
            accept="application/pdf/*"
            name="avatar"
            randomizeFilename
            storageRef={storage.ref("application/pdf")}
            onUploadSuccess={viewPdf}
          />
          <div className="note_container ">
          	{
          	website.map((w)=>{
          		return(<a href={w.url} className="link" key={w.name} target="blank "><div className="Note real_note" style={{backgroundColor: "#efefef"}}><h4 style={{color: "red"}}>{w.name}</h4></div></a>)
          	})
          	}
          </div>
          </div>
            </div>


            
            

        </div>

    </div>
    )
}

export default Note;