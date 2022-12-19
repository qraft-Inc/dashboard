import DashboardLayout from "../../components/Layouts/DashBoardLayout";

const TrackProgress = () => {
  const meta = [
    {
      id: 1,
      bgColor: "bg-yellow-500",
      text: "Not started",
    },
    {
      id: 2,
      bgColor: "bg-yellow-100",
      text: "In Progress",
    },
    {
      id: 3,
      bgColor: "bg-teal-300",
      text: "Completed",
    },
    {
      id: 4,
      bgColor: "bg-purple-500",
      text: "Under Review",
    },

    {
      id: 5,
      bgColor: "bg-pink-500",
      text: "Past Due Date",
    },
  ];

  return (
    <div>
      <h2 className="text-blue-800">Learning Calender</h2>
      <p>Tasks</p>
      <div className="flex justify-between">
        {meta.map(({ id, bgColor, text }) => {
          return (
            <div className="my-4 " key={id}>
              <span className={`${bgColor} py-4 px-6`}>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TrackProgress.getLayout = function getLayout(page) {
  return <DashboardLayout title="Track Progress">{page}</DashboardLayout>;
};

export default TrackProgress;
