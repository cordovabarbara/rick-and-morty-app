import CardLocation from "./CardLocation"
import ResidentCard from "./ResidentCard"
import './Styles/PrincipalContent.css'


const PrincipalContent = ({getLocation}) => {
  return (
<>
    <CardLocation location={getLocation} />
    <div className="principal__box">
        {
            getLocation?.residents.map(url => (
            <ResidentCard
                key={url}
                url={url}
            />
        ))
        }
    </div>
</>
)
}

export default PrincipalContent