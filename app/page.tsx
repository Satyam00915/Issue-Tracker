import IssueCard from "./components/IssueCard";

export default function Home() {
  return (
    <div className="text-black flex flex-wrap gap-3 justify-around">
      <IssueCard
        title="Bug1"
        description="Description of BUg1"
        status="OPEN"
        createdAt="sadasd"
      />
      <IssueCard
        title="Bug1"
        description="Description of BUg1"
        status="OPEN"
        createdAt="sadasd"
      />
      <IssueCard
        title="Bug1"
        description="Description of BUg1"
        status="OPEN"
        createdAt="sadasd"
      />
    </div>
  );
}
