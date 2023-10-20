"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";
import Post from "@app/types/post";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (!session?.user) return;

    fetchPosts();
  }, [session]);

  const handleEdit = (post: Post) => {
    router.push(`/prompt/update/${post._id}`);
  };

  const handleDelete = (post: Post) => {};

  return (
    <Profile
      name="My"
      desc="Welcome to your profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    ></Profile>
  );
};

export default MyProfile;
