
import './HomeCourselImage'

function HomeCourselImage (props) {
  return (
  
      <div className="div">
            <center>
            <img className="image" src={props.source} alt={props.name} height={300} width={300}/>
            </center>
        </div>
  )
}

export default HomeCourselImage;
