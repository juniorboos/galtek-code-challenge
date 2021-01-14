import React from "react";
import { Container } from "../../styles/components/Home";
import Slider from "../Slider";
import { useQuery } from "react-apollo";
import { GET_WEATHERS } from "../../services/graphql/queries/weatherQuery";
import Loading from "../Loading";

const Home = () => {
  const { loading, error, data } = useQuery(GET_WEATHERS, {
    pollInterval: 5 * 60 * 1000,
  });

  if (loading) return <Loading />;
  if (error) return <h1>Error! {error.message}</h1>;

  console.log(data);

  return (
    <Container>
      <Slider items={data.weathers} />
    </Container>
  );
};

export default Home;
