import { useState } from "react";

export default function BlogFormHooks(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([
    { title: "hello blog", content: "written with love", viewRights: "Public" },
  ]);

  const [viewRights, setViewRights] = useState("");

  function submitForm(e) {
    e.preventDefault();
    const blog = { title, content, viewRights };

    setBlogs(blogs.concat(blog));
    setTitle("");
    setContent("");
    setViewRights("");
  }

  return (
    <>
      <h1>Hooks form</h1>
      <div className="row">
        <div className="col-8">
          <form onSubmit={(e) => submitForm(e)}>
            <label>Title</label>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Content</label>
            <input
              type="text"
              value={content}
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <button
              onClick={() => setViewRights("Public")}
              active={viewRights === "Public"}
            >
              {" "}
              Public
            </button>
            <button
              onClick={() => setViewRights("Private")}
              active={viewRights === "Private"}
            >
              {" "}
              Private
            </button>
            <br />
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="col-4">
          {blogs.length > 0
            ? blogs.map((blog, i) => {
                return (
                  <div key={i}>
                    <h4>{blog.title}</h4>
                    <p>{blog.content}</p>
                    <p>{blog.viewRights}</p>
                  </div>
                );
              })
            : "No Blogs"}
        </div>
      </div>
    </>
  );
}
