import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

type params = { params: { id: string } };

export const GET = async (req: any, { params: { id } }: params) => {
  try {
    //Need to connect everytime because this runs serverless
    await connectToDB();

    const prompts = await Prompt.find({
      creator: id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Fail", { status: 500 });
  }
};
