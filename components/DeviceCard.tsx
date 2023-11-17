function DeviceCard({device}: { device: string })  {
  const cardStyle = {
    width: '125px', 
    height: '125px', 
    backgroundColor: '#3498db', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', 
    fontWeight: 'bold',
    marginRight:'50px'
  };

  return (
    <div style={cardStyle}>
      {device}
    </div>
  );
}

export default DeviceCard;
