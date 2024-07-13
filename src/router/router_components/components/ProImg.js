import './ProImg'

function ProImg(props) {
  return (
  
      <div className="div">
            <center>
            <img className="image" src={props.source} alt={props.name} height={280} width={300}/>
            </center>
        </div>
  )
}

export default ProImg;
