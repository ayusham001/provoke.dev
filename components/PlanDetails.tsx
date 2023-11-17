function PlanDetails({ duration, mobile }: { duration: string; mobile: string }) {
  return (
    <div className="flex justify-between gap-20">
      {duration}
      {mobile}
    </div>
  );
}

export default PlanDetails;
