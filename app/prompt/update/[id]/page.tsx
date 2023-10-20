import PromptEditor from "@components/PromptEditor";

type params = { params: { id: string } };

const EditPrompt = async ({ params: { id } }: params) => {
  /**
   * IT looked like a good idea to fetch the prompt serverside,
   * but since the user is opening this page to modify the post
   * we need to continuosly revalidate (we can't cache the prompt data, because the user is activly modifying it)
   * henche we could make this simpler and fetch from clientside every time the user navigates to an edit prompt page
   *
   * I'll keep the code as it is, because this is a big learning
   */
  const response = await fetch(`${process.env.URL}/api/prompt/${id}`, {
    method: "GET",
    next: { revalidate: 1 },
  });
  const data = await response.json();

  return <PromptEditor editorType="Edit" existingPost={data} />;
};

export default EditPrompt;
