"use client";

import { useState } from "react";

import Form from "@components/Form";
import Prompt from "@app/types/prompt";
import { useRouter } from "next/router";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<Prompt>({ prompt: "", tag: "" });
  const router = useRouter();

  const createPrompt = async (e: any) => {
    e.preventDefault(); //Prevents the browser to reload the page
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({ prompt: post.prompt, tag: post.tag /*userid*/ }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      post={post}
      type="Create"
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    ></Form>
  );
};

export default CreatePrompt;
