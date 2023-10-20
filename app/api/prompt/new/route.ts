import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req: any) => {
  const { userId, prompt, tag } = await req.json();

  try {
    //Need to connect everytime because this runs serverless
    await connectToDB();

    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Fail", { status: 500 });
  }
};
