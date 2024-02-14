import { render, screen } from "@testing-library/react";
import Homepage, { getStaticProps } from "../pages/index";


describe("Homepage Component", () => {
  const mockBlogs = [
    {
      id: 1,
      title: "Test Blog 1",
      content: "Test content 1",
    },
    {
      id: 2,
      title: "Test Blog 2",
      content: "Test content 2",
    },
    {
      id: 3,
      title: "Test Blog 3",
      content: "Test content 3",
    },
  ];

  it("renders blog list with correct heading and content", async () => {
    render(<Homepage blogs={mockBlogs} />);

    const headingElement = await screen.getByText(
      "Read about the latest stories"
    );
    expect(headingElement).toBeInTheDocument();
  });


});



jest.mock("../lib/apolloClient", () => ({
  initializeApollo: jest.fn(() => ({
    query: jest.fn(),
  })),
}));

jest.mock("../lib/gql", () => ({
  ALL_POSTS_QUERY: jest.fn(),
}));

describe("getStaticProps", () => {
  // it("fetches data and returns props", async () => {
  //   const mockedData = {
  //     /* mocked data */
  //   };
  //   const mockedQuery = jest.fn(() => ({ data: mockedData }));

  //   // Mocking Apollo client behavior
  //   const apolloClient = {
  //     query: mockedQuery,
  //   };

  //   const initializeApolloMock =
  //     require("../lib/apolloClient").initializeApollo;
    
  //   initializeApolloMock.mockReturnValue(apolloClient);

  //   const { getStaticProps: getProps } = require("./index");

  //   const props = await getProps();

  //   expect(props).toEqual({
  //     props: {
  //       data: mockedData,
  //     },
  //     revalidate: 1,
  //   });

  //   expect(mockedQuery).toHaveBeenCalledWith({
  //     query: expect.any(Function), 
  //     variables: {},
  //   });
  // });

});
