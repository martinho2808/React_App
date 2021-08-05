import React from "react";

export default class BlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      blogs: [{ title: "Hello World", content: "Test Test Test" }],
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const string = `Title: ${this.state.title}, \n Content: ${this.state.content}`;
    alert(string);
    const obj = { title: this.state.title, content: this.state.content };
    const blogList = this.state.blogs.concat(obj);
    this.setState({
      blogs: blogList,
      title: "",
      content: "",
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <label>Title</label>
              <br />
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleTitleChange}
                placeholder="Blog Title"
              />
              <br />
              <label>Content</label>
              <br />
              <textarea
                type="text"
                value={this.state.content}
                onChange={this.handleContentChange}
                placeholder="Blog Content"
              />
              <br />
              <button type="submit" value="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="col">
            {this.state.blogs.length > 0
              ? this.state.blogs.map((blog, i) => {
                  return (
                    <div key={i}>
                      <h3>{blog.title}</h3>
                      <p>{blog.content}</p>
                    </div>
                  );
                })
              : "No Blogs yet"}
          </div>
        </div>
      </div>
    );
  }
}
