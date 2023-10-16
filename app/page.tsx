import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Hyping AI-propts</span>
      <p className="desc text-center">
        open-source AI promting tool for modern world discover, bla bla TODO:
        include more catchy words
      </p>

      <Feed />
    </section>
  );
};

export default Home;
