import React from "react";
import { Container, Error } from "../../styles/components/Home";
import Slider from "../Slider";
import { useQuery } from "react-apollo";
import { GET_WEATHERS } from "../../services/graphql/queries/weatherQuery";
import Loading from "../Loading";
import { NetworkStatus } from "apollo-client";

const Home = () => {
  // fetch data when component loads and refetch every 30min.
  const { loading, error, data, networkStatus, refetch } = useQuery(
    GET_WEATHERS,
    {
      pollInterval: 5 * 60 * 1000,
      notifyOnNetworkStatusChange: true,
    }
  );

  // checks if its refetching.
  if (networkStatus === NetworkStatus.refetch)
    return <Error>'Refetching!'</Error>;

  if (loading) return <Loading />;

  if (error) {
    // try to refetch after 30s when error occurs.
    setTimeout(() => {
      refetch();
    }, 30000);

    return <Error>Error! {error.message}</Error>;
  }

  return (
    <Container data-testid="home">
      <Slider items={data.weathers} />
    </Container>
  );
};

export default Home;
