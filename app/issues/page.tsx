import { Button } from "@radix-ui/themes";
import Link from "next/link";
const Issue = () => {
  return (
    <div className="text-black">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default Issue;
