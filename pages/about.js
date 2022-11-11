import Image from "next/image";
import Head from "next/head";
import myPic from "../public/pexel.jpg";
function about() {
  return (
    <>
      <Head>
        <title>about</title>
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
      <div className="prof  container text-center" alt="...">
        <div className="row">
          <div class="col">
            <Image
              src={myPic}
              alt="Picture of the author"
              width="350px"
              height="300px"
            />
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </>
  );
}

export default about;
