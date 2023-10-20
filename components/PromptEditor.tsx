"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Form from "@components/Form";
import Prompt from "@app/types/prompt";
import Post from "@app/types/post";

type PromptEditorProps = {
  editorType: "Create" | "Edit";
  existingPost?: Post;
};

const PromptEditorError = () => {
  return <div>Ouch! Something went wrong</div>;
};

const PromptEditor = ({ editorType, existingPost }: PromptEditorProps) => {
  console.log(existingPost);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<Prompt>({
    prompt: "",
    tag: "",
  });
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (existingPost) {
      setPost({
        prompt: existingPost?.prompt || "",
        tag: existingPost?.tag || "",
      });
    }
  }, [existingPost]);

  const createPrompt = async (e: any) => {
    e.preventDefault(); //Prevents the browser to reload the page
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user?.id,
        }),
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

  const updatePrompt = async (e: any) => {
    e.preventDefault(); //Prevents the browser to reload the page
    setSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${existingPost?._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user?.id,
        }),
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

  let onHandleSubmit;
  if (editorType === "Create") {
    onHandleSubmit = createPrompt;
  } else if (editorType === "Edit") {
    if (!existingPost) {
      return <PromptEditorError />;
    }

    // Verify that the user that is editing is the same user that created the post
    if (existingPost.creator._id !== session?.user.id) {
      return <PromptEditorError />;
    }

    onHandleSubmit = updatePrompt;
  } else {
    return <PromptEditorError />;
  }

  return (
    <Form
      post={post}
      type={editorType}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={onHandleSubmit}
    ></Form>
  );
};

export default PromptEditor;
