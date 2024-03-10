import { Post } from "@/lib/models";
import { User } from "@/lib/models";

import { connectToDb } from "@/lib/utils";

import { unstable_noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (e) {
    console.log(e);
    throw new Error(e as any);
  }
};

export const getPost = async (slug: any) => {
  try {
    connectToDb();
    const posts = await Post.find({ slug });
    return posts;
  } catch (e) {
    console.log(e);
    throw new Error(e as any);
  }
};

export const getUser = async (id: any) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error(e as any);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const user = await User.find();
    return user;
  } catch (e) {
    console.log(e);
    throw new Error(e as any);
  }
};
