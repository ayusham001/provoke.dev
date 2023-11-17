import Devices from "./Devices"
import Duration from "./Duration"
import Plans from "./Plans"

function HomePage() {
  return (
    <div className="w-full">
      <h1>Choose the right plan for you</h1>
      <Duration/>
      <Devices/>
      <Plans/>
    </div>
  )
}

export default HomePage