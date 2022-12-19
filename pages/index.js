import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div>
        <Link href="/dashboard">
          <a className="p-2">Go to dashboard</a>
        </Link>
      </div>
    </Layout>
  );
}
