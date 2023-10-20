import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req: any) => {
  try {
    //Need to connect everytime because this runs serverless
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Fail", { status: 500 });
  }
};
