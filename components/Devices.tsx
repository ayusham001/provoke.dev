import DeviceCard from "./DeviceCard";

function Devices() {
  return (
    <div className="flex w-fit justify-between">
      <DeviceCard device={'Mobile'} />
      <DeviceCard device={'Basic'} />
      <DeviceCard device={'Standard'} />
      <DeviceCard device={'Premium'} />
    </div>
  );
}

export default Devices;
