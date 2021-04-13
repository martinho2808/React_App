import React from "react";

import renderer from "react-test-renderer";

import { GroupsPage } from "../Pages/GroupsPage";

describe("<GroupsPage />", () => {
  it("renders complete snapshot", () => {
    const component = renderer.create(<GroupsPage />);
    let tree = component.toJSON();
    component.unmount();
    expect(tree).toMatchSnapshot();
  });
});
