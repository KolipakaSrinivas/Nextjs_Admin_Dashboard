import { User, Product } from "@/app/lib/models";
import { connectToDb } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// addUser
export const addUser = async formData => {
  "use server";
  const {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive
  } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to ccreate a User!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// addProduct
export const addProduct = async formData => {
  "use server";
  const { title, desc, price, stock, color, size } = Object.fromEntries(
    formData
  );

  try {
    connectToDb();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// deleteUser
export const deleteUser = async formData => {
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

// deleteProduct
export const deleteProduct = async formData => {
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// updataUser
export const updateUser = async (formData) => {
  "use server";
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//updateProduct
export const updateProduct = async (formData) => {
  "use server";
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};