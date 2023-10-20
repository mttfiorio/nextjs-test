import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-prompt</span>
      </h1>

      <p className="desc text-center">
        using the AI hype in a webapp that has absolutely nothing to do with AI
      </p>

      <Feed />
    </section>
  );
};

export default Home;
