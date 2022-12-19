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

  const tasks = [
    {
      id: 1,
      dueDate: "25th Jan 2022",
      task: "Fix the home page sign in error message that keeps popping up all the time ",
    },
    {
      id: 2,
      dueDate: "25th Jan 2022",
      task: "Fix the home page sign in error message that keeps popping up all the time ",
    },
    {
      id: 3,
      dueDate: "25th Jan 2022",
      task: "Fix the home page sign in error message that keeps popping up all the time ",
    },
    {
      id: 4,
      dueDate: "25th Jan 2022",
      task: "Fix the home page sign in error message that keeps popping up all the time ",
    },
  ];

  const CardComponent = () => {
    return (
      <div className="w-[250px] border-2 p-2 my-8">
        <p className="">
          {" "}
          Fix the home page sign in error message that keeps popping up all the
          time{" "}
        </p>
        <span>Due Date: 25th Jan 2022</span>
      </div>
    );
  };
  return (
    <div>
      <h2 className="text-blue-800">Learning Calender</h2>
      <p>Tasks</p>
      <div className="flex justify-between my-4 ">
        {meta.map(({ id, bgColor, text }) => {
          return (
            <div className="" key={id}>
              <span className={`${bgColor} py-4 px-6`}>{text}</span>
              <CardComponent />
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

TrackProgress.getLayout = function getLayout(page) {
  return <DashboardLayout title="Track Progress">{page}</DashboardLayout>;
};

export default TrackProgress;
