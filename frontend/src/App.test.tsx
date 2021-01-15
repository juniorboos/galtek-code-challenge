import React from "react";
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { GET_WEATHERS } from "./services/graphql/queries/weatherQuery";
import { mocksGetWeathers } from "./test-utils/mocks";

afterEach(cleanup);

test("renders without error, checks cards and click buttons", async () => {
  const mocks = [
    {
      request: {
        query: GET_WEATHERS,
      },
      result: mocksGetWeathers,
    },
  ];

  const { getByTestId, getAllByTestId, getByTitle } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const loading = getByTestId("loading");

  expect(loading).toBeInTheDocument();

  await waitForElementToBeRemoved(loading);

  const home = getByTestId("home");

  expect(home).toBeInTheDocument();

  const cards = getAllByTestId("weather-card");
  expect(cards).toHaveLength(mocksGetWeathers.data.weathers.length);

  const previousButton = getByTitle("Go to previous slide");
  const nextButton = getByTitle("Go to next slide");

  fireEvent.click(nextButton);
  fireEvent.click(previousButton);
});
