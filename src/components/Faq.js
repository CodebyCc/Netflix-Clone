import React, { useState } from "react";

// const answers = [
//   {
//     id: 1,
//     head: "What is Netflix?",
//     paragraph1:
//       "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     paragraph2:
//       " You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
//   },
//   // {
//   //   id: 2,
//   //   head: "How much does Netflix cost?",
//   //   paragraph1:
//   //     " Watch Netflix on your smartphone, tablet, Smart TV, laptop, or  streaming device, all for one fixed monthly fee. Plans range from  US$3.99 to US$11.99 a month. No extra costs, no contracts.",
//   //   paragraph2: "",
//   // },
// ];

const Faq = () => {
  const [hide, setHide] = useState(false);
  const handle = () => {
    setHide(!hide);
  };

  return (
    <div className="faq">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div>
        <div>
          <div className="question-container1">
            <h3 className="question-heading">What is Netflix ?</h3>
            {/* <img
              className="question-chev"
              onClick={handle}
              src={plut}
              fill="fill"
              alt=""
            /> */}
            <h3 onClick={handle} className="question-chev">
              {hide ? "x" : "+"}
            </h3>
          </div>
          <div className={hide ? "answer-container" : "none"}>
            <div className="answer-container">
              <p className="answer-p">
                "Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices You can watch as much
                as you want, whenever you want without a single commercial all
                for one low monthly price. There's always something new to
                discover and new TV shows and movies are added every week!
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="question-container">
            <h3 className="question-heading">How Much Does Netflix Cost ?</h3>
            <h3 className="question-chev">+</h3>
          </div>
          <div className="answer-container">
            <p className="none">
              "Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices
            </p>
            <p></p>
          </div>
        </div>
        <div>
          <div className="question-container">
            <h3 className="question-heading">Where Can I Watch ?</h3>
            <h3 className="question-chev">+</h3>
          </div>
          <div className="answer-container">
            <p className="none">
              "Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices
            </p>
          </div>
        </div>
        <div>
          <div className="question-container">
            <h3 className="question-heading">How Do I Cancel ?</h3>
            <h3 className="question-chev">+</h3>
          </div>
          <div className="answer-container">
            <p className="none">
              "Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices
            </p>
          </div>
        </div>
        <div>
          <div className="question-container">
            <h3 className="question-heading">Is Netflix good for kids ?</h3>
            <h3 className="question-chev">+</h3>
          </div>
          <div className="answer-container">
            <p className="none">
              "Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices
            </p>
          </div>
        </div>
      </div>
      <div className="in-container">
        <p className=" mobile-paragraph">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <span class="input-btn">
          <input
            class="input"
            type="email"
            placeholder="Email address"
            required
          />
          <button class="btn btn-medium hero__btn">Get Started</button>
        </span>
      </div>
    </div>
  );
};

export default Faq;
