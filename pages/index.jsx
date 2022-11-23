import React from "react";
import Head from "next/head";
import DatePicker from "../components/datePicker";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
 const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);
  
  return (
    <>
      <Head>
        <title> Maiskarte</title>
        <meta name="keyword" content="web development, programing" />
      </Head>
      <div className="container">
        <div>
          <form action="#">
            <label className="switch">
              <input type="checkbox" checked={darkTheme} onChange={handleToggle}/>
              <spam className="slider"></spam>
            </label>
          </form>
        </div>
      </div>

      <DatePicker />
      <Link href="/table">
        <a className="btn btn-primary" role="button">
          Export Data
        </a>
      </Link>
    </>
  );
};
