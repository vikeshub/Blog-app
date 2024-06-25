import User from "../model/user.js";
import bcrypt from "bcrypt";

export const signupUser = async (request, response) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(request.body.password, salt);

    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedpassword,
    };

    console.log("User signup request:", user); // Log the request body
    const newUser = new User(user);
    await newUser.save();
    console.log(newUser);

    return response.status(200).json({ msg: "signup sucessfull" });
  } catch (error) {
    console.error("Error while signing up the user:", error); // Log the error
    return response.status(500).json({ msg: "Error while signup the user" });
  }
};
