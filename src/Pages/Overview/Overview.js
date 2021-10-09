const Overview=()=>{
    return(
        <div className="note_container">
                {
                    [1,2,3,4,5,6,7].map((n)=>(
                        <div className="Note">
                        <p>23 June, 2017</p>
                        <h3>The Monkey Rope <span className="rating">5<i className="far fa-star"></i></span></h3>
                        <p className="author">posted by author</p>
                        <img src="https://picsum.photos/300/150" alt="image"/>
                        <p className="note_description">Knowiiest is an initiative by a few students of IIEST Shibpur to help our freshers get accustomed to a new </p>
                        <p className="subject_tag">Chemistry</p>
                    </div>
                    ))
                }
            </div>
    );
}
export default Overview;