// Write your code here
const DenominationItem = props => {
  const {denominationDetails} = props
  const {value} = denominationDetails
  return (
    <div>
      <button>{value}</button>
    </div>
  )
}
export default DenominationItem
