import CardLocation from "./CardLocation"
import ResidentCard from "./ResidentCard"


const PrincipalContent = ({getLocation}) => {
  return (
<div>
    <CardLocation location={getLocation} />
    <div>
        {
            getLocation?.residents.map(url => (
            <ResidentCard
                key={url}
                url={url}
            />
        ))
        }
    </div>
</div>
)
}

export default PrincipalContent