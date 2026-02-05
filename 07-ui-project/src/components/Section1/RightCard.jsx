import { ArrowRight } from "lucide-react";

const RightCard = () => {
  return (
    <div className="h-full w-80 bg-amber-300 relative rounded-4xl overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
        alt="working professional woman"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-amber-200 flex p-8 flex-col justify-between">
        <h2
          className="bg-white text-2xl font-semibold
         rounded-full h-14 w-12 flex justify-center items-center"
        >
          1
        </h2>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            corporis repudiandae est dolorum doloribus voluptas?
          </p>
          <div>
            <button>Satisfied</button>
            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
