import Head from "next/head";
import DatePicker from "../components/datePicker";
import Link from "next/link";
import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  const handleApply = () => {
    <Link href="/table"></Link>;
  };
  return (
    <>
      <Head>
        <title> Maiskarte</title>
        <meta name="keyword" content="web development, programing" />
      </Head>
      <DatePicker />
      <Link href="/table">
        <a className="btn btn-primary" role="button">
          Export Data
        </a>
      </Link>
    </>
  );
}
