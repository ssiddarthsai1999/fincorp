import Features from "./FeaturesCard";

const FeatureData = () => {
  return (
    <div className="">
      <h2 className="text-center mb-10 mt-5">Features</h2>
      <div className="flex flex-col p-10 lg:flex-row overflow-x-auto justify-center items-center gap-6">
        <Features
          title="Improved Accuracy"
          paragraph="AI-Powered Bookkeeping & Finance systems can provide a higher level of accuracy in financial transactions and records than manual bookkeeping. This can be particularly important for startups where every dollar counts."
          image="https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?w=1060&t=st=1680791161~exp=1680791761~hmac=94557fde575bbee1835f56bcceeb046812d32285bba852d34be7daa1fc3b6a56"
        />
        <Features
          title="Real-Time Financial Insights"
          paragraph="AI-Powered Bookkeeping & Finance systems can provide startups with real-time financial insights, allowing them to make data-driven decisions about the company's future."
          image="https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?w=1060&t=st=1680791161~exp=1680791761~hmac=94557fde575bbee1835f56bcceeb046812d32285bba852d34be7daa1fc3b6a56"
        />
        <Features
          title="Cost Savings"
          paragraph="By automating financial processes, startups can reduce the need for manual labor and associated costs, freeing up resources to be allocated elsewhere in the business."
          image="https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?w=1060&t=st=1680791161~exp=1680791761~hmac=94557fde575bbee1835f56bcceeb046812d32285bba852d34be7daa1fc3b6a56"
        />
      </div>
    </div>
  );
};

export default FeatureData;
