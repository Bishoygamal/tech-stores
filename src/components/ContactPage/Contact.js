import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/beshoy.ot@gmail.com"
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="john smith"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email@email.com"
              />
            </div>
            {/* sybject */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="important !!!"
              />
            </div>
            {/*Message */}
            <div className="form">
              <textarea
                className="form-control"
                name="message"
                rows="10"
                placeholder="hello there buddy"
              ></textarea>
            </div>
             {/*Submit */}
             <div className="form-group mt-3">
                 <input type="submit" className="form-control bg-primary text-white" value="send" />
             </div>
          </form>
        </div>
      </div>
    </section>
  );
}
