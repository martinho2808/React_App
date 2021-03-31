import image from "../assets/logo.png";

export const JSXExercise = (
  <div>
    <header>
      <h1>Simple Website</h1>
    </header>
    <section>
      This is a simple website made without React. Try to convert this into
      React enabled.
      <ol>
        <li>
          First, you need to use <span class="command">create-react-app</span>
        </li>
        <li>
          Second, you need to run <span class="command">npm start</span>
        </li>
      </ol>
    </section>
    <footer
      style={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} style={{ height: "300px", width: "300px" }} alt="logo" />
    </footer>
  </div>
);
