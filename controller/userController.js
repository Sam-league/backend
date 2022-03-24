import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const getUsers = async (req, res) => {
  try {
    let result = await User.find().limit(20);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    let result = await User.findOne({ _id: req.params.id });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    let result = await User.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      password: req.body.password,
    });
    let { user_name, user_email } = result;
    res.status(201).send({
      user_name,
      user_email,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    let result = await User.deleteMany();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { getUser, getUsers, createUser, deleteUser };
