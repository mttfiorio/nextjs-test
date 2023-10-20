import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

type params = { params: { id: string } };

export const GET = async (req: any, { params: { id } }: params) => {
  try {
    //Need to connect everytime because this runs serverless
    await connectToDB();

    const prompt = await Prompt.findById(id).populate("creator");
    if (!prompt) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Fail", { status: 500 });
  }
};

export const PATCH = async (req: any, { params: { id } }: params) => {
  const { prompt, tag } = await req.json();

  try {
    //Need to connect everytime because this runs serverless
    await connectToDB();

    const existingPrompt = await Prompt.findById(id).populate("creator");
    if (!prompt) {
      return new Response("Not found", { status: 404 });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    const updatedPrompt = await existingPrompt.save();

    return new Response(JSON.stringify(updatedPrompt), { status: 200 });
  } catch (error) {
    return new Response("Fail", { status: 500 });
  }
};

export const DELETE = async (req: any, { params: { id } }: params) => {
  try {
    //Need to connect everytime because this runs serverless
    await connectToDB();

    await Prompt.findByIdAndRemove(id);

    return new Response("Deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Fail", { status: 500 });
  }
};
