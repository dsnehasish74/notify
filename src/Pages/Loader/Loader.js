import Loader from "react-loader-spinner";
const Loaderr=()=>{
	return (
	<div className="lc">
	 <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
      );
}

export default Loaderr;