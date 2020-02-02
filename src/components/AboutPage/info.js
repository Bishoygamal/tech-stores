import React from "react";
import aboutBcg from "../../images/aboutBcg.jpeg";
import Title from "./../Title";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--mainGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" center />
            <p className="text-lead text-muted my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining e{" "}
            </p>
            <button className="main-link" type="button" style={{marginTop:'2rem'}}>MORE INFO</button>
          </div>
        </div>
      </div>
    </section>
  );
}
