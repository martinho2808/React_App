import { render, fireEvent, waitFor, screen } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";
import LinkList from "../Components/LinkList";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { store } from "../Redux/store";
import { Provider } from "react-redux";

const worker = setupServer(
  rest.get(`https://www.reddit.com/r/programming.json`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          data: {
            children: [
              { title: "testlink1", url: "https://google.com" },
              { title: "testlink2", url: "https://google.com" },
            ],
          },
        },
      })
    );
  })
);

beforeAll(() => worker.listen());
afterEach(() => worker.resetHandlers());
afterAll(() => worker.close());

describe("<LinkList />", () => {
  it("can display items already within redux", async () => {
    render(<LinkList />);

    expect(screen.queryByText(/Google/i)).toBeTruthy();
    expect(screen.getAllByText(/Delete Link/i).length).toEqual(4);
  });

  it("can delete items already stored in redux", async () => {
    render(<LinkList />);
    expect(screen.getAllByText(/Delete Link/i).length).toEqual(4);

    let buttons = screen.getAllByText("Delete Link");
    fireEvent.click(buttons[0]);
    expect(screen.getAllByText(/Delete Link/i).length).toEqual(3);
  });
  it("can add new items to the redux array", () => {
    render(<LinkList />);
    fireEvent.change(screen.getByLabelText(/title/i), {
      currentTarget: { value: "The Facebook" },
    });
    fireEvent.change(screen.getByLabelText(/url/i), {
      currentTarget: { value: "https://facebook.com" },
    });
    fireEvent.click(screen.getByText("New Link"));

    expect(screen.getAllByText(/Delete Link/i).length).toEqual(5);
  });

  it("can call an API to get more links", async () => {
    render(
      <Provider store={store}>
        <LinkList />
      </Provider>
    );
    expect(screen.getAllByText(/Delete Link/i).length).toEqual(4);
    fireEvent.click(screen.getByText("Load Links"));
    await waitFor(() => {
      expect(screen.getAllByText(/Delete Link/i).length).toEqual(6);
    });
    let occurrence = await screen.findAllByText(/testLink/i);
    expect(occurrence.length).toEqual(2);
  });
});
