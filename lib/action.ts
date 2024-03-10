"use server";

import { connectToDb } from "@/lib/utils";
import { Post, User } from "@/lib/models";
import { revalidatePath } from "next/cache";
import { aws4 } from "mongodb/src/deps";

export const addPost = async (
  prevState: any,
  formData: any,
) => {
  const { title, desc, slug, userId } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("save to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (e) {
    console.log(e);
    return { error: "something wrong" };
  }
};

export const deletePost = async (
  formData: any,
) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
    return { error: "something wrong" };
  }
};

export const addUser = async (
  prevState: any,
  formData: any,
) => {
  const { username, email, password, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("save");
    revalidatePath("/admin");
  } catch (e) {
    console.log(e);
    return { error: "something wrong" };
  }
};

export const deleteUser = async (
  formData: any,
) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("delete");
    revalidatePath("/admin");
  } catch (e) {
    console.log(e);
    return { error: "something wrong" };
  }
};
