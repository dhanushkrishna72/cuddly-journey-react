import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://img.logo.dev/google.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Google",
      datePosted: "5 days ago",
      position: "Senior Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "India, Bengaluru",
    },
    {
      brandLogo:
        "https://img.logo.dev/apple.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      position: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "USA, Cupertino",
    },
    {
      brandLogo:
        "https://img.logo.dev/meta.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Meta",
      datePosted: "1 week ago",
      position: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$85/hr",
      location: "Canada, Toronto",
    },
    {
      brandLogo:
        "https://img.logo.dev/amazon.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Amazon",
      datePosted: "3 days ago",
      position: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "India, Hyderabad",
    },
    {
      brandLogo:
        "https://img.logo.dev/netflix.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Netflix",
      datePosted: "12 weeks ago",
      position: "Backend Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "USA, Los Gatos",
    },
    {
      brandLogo:
        "https://img.logo.dev/microsoft.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      position: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "India, Hyderabad",
    },
    {
      brandLogo:
        "https://img.logo.dev/tesla.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Tesla",
      datePosted: "6 days ago",
      position: "Software Engineer – Autopilot",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$140/hr",
      location: "USA, Palo Alto",
    },
    {
      brandLogo:
        "https://img.logo.dev/nvidia.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "NVIDIA",
      datePosted: "9 days ago",
      position: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$160/hr",
      location: "Japan, Tokyo",
    },
    {
      brandLogo:
        "https://img.logo.dev/samsung.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "Samsung",
      datePosted: "2 weeks ago",
      position: "Mobile App Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "South Korea, Seoul",
    },
    {
      brandLogo:
        "https://img.logo.dev/ibm.com?token=pk_Pu5RGCgVSGmtu8w8JPjOkA&size=80&retina=true",
      companyName: "IBM",
      datePosted: "7 weeks ago",
      position: "Data Scientist",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Germany, Berlin",
    },
  ];

  return (
    <div>
      <div className="parent">
        {jobOpenings.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Card
                brandLogo={elem.brandLogo}
                companyName={elem.companyName}
                datePosted={elem.datePosted}
                position={elem.position}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                location={elem.location}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
