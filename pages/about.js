import Image from "next/image";
import Head from "next/head";
import profile1 from "../public/JEMIECA.png";
import profile2 from "../public/JONARD.jpeg";
import profile3 from "../public/MARICRIS.png";
import profile4 from "../public/zichri.jpg";
function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">About Us</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
      </section>
      <div className="prof container text-center ">
        <div className="row d-flex align-items-center">
          <div className="col flex-shrink-0">
            <Image
              className="rounded-circle"
              src={profile1}
              alt="Picture of the author"
              width="330px"
              height="300px"
            />
          </div>
          <div className="col flex-grow-1 ms-3">
            <h1>JEMIECA OROT</h1>
            <p className="para1">
              Address:Gaboc, Lingion, Manolo Fortich Bukidnon
            </p>
            <p>Phone: +63996 610 7928</p>
            <p>Gmail: jemieca.orot12@gmail.com</p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col flex-shrink-0">
            <Image
              className="rounded-circle"
              src={profile2}
              alt="Picture of the author"
              width="330px"
              height="300px"
            />
          </div>
          <div className="col flex-grow-1 ms-3">
            <h1> JONARD MENESTERIO</h1>
            <p className="para1">
              Address: Lower Sosohon, Tankulan, Manolo Fortich Bukidnon
            </p>
            <p>Phone:+63905 646 6734</p>
            <p>Gmail: jonard10282000@gmail.com</p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col flex-shrink-0">
            <Image
              className="rounded-circle"
              src={profile3}
              alt="Picture of the author"
              width="330px"
              height="300px"
            />
          </div>
          <div className="col flex-grow-1 ms-3">
            <h1>MARICRIS LIBRES</h1>
            <p className="para1">Address: Dalirig, Manolo Fortich Bukidnon</p>
            <p>Phone: +639652261172</p>
            <p>Gmail: maricrisdumayolibres@gmail.com</p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col flex-shrink-0">
            <Image
              className="rounded-circle"
              src={profile4}
              alt="Picture of the author"
              width="330px"
              height="300px"
            />
          </div>
          <div className="col flex-grow-1 ms-3">
            <h1>ZICHRI VICARIATO</h1>
            <p className="para1">
              Address: Gaboc, Lingion, Manolo Fortich Bukidnon
            </p>
            <p>Phone: +63926 237 4930</p>
            <p>Gmail: Zvicariato@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
