import React from "react";

function FaqDrawer() {

  return (
    <div className="z-10 drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="faq cursor-pointer text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-large rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2"
        >
          Frequently Asked Q's
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-9 w-90 min-h-full bg-base-200 text-base-content">
          <div>
            <div
              className="divider font-extrabold divider-start text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-500"
              style={{ fontSize: "large", fontWeight: "bold" }}
            >
              Frequently
            </div>
            <div
              className="divider font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-sky-300 to-emerald-500"
              style={{ fontSize: "large", fontWeight: "bold" }}
            >
              Asked
            </div>
            <div
              className="divider font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-sky-300 to-emerald-500 divider-end"
              style={{ fontSize: "large", fontWeight: "bold" }}
            >
              Questions
            </div>
          </div>
          <div className="chat chat-start">
            <div
              className="chat-bubble"
              style={{
                color: "white",
                marginBottom: "0px",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              My cat licked my sweater!
              <br />
              do you guys do{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-200">
                refunds?!?
              </span>
            </div>
          </div>

          <div className="chat chat-end">
            <div
              className="chat-bubble"
              style={{
                color: "white",
                fontSize: "large",
                fontWeight: "bold",
                marginBottom: "40px",
              }}
            >
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-200">
                No questions asked
              </span>
              , just mail it in.
            </div>
          </div>
          <div className="chat chat-start">
            <div
              className="chat-bubble"
              style={{ color: "white", fontSize: "large", fontWeight: "bold" }}
            >
              Where do you
              <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-200">
                deliver?
              </span>
            </div>
          </div>
          <div className="chat chat-end" style={{ marginBottom: "20px" }}>
            <div
              className="chat-bubble"
              style={{ color: "white", fontSize: "large", fontWeight: "bold" }}
            >
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-200">
                Anywhere around the world.
              </span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default FaqDrawer;
