// import { Logger } from 'log4js'
import { dbs } from "../../dbs/index.js";
import { logger } from "../../logger/log4js.js";

const getUser = async (query) => {
  try {
    let data = null;
    if (query === {}) {
      data = await dbs("user").where({ query }).limit(20);
    } else {
      data = await dbs("user").select("*").limit(20);
    }
    return data;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
const modifyUser = async (data) => {
  try {
    const { id } = data;
    if (id) {
      const result = await dbs("user").update(data);
      return result;
    } else {
      return "error";
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
const addtUser = async (data) => {
  try {
    if (data !== {}) {
      const result = await dbs("user").insert(data);
      return result;
    } else {
      return "error";
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
const deleteUser = async (query) => {
  try {
    const {id} = data
    if(id){
      const result = await dbs("user").where({id}).del();
      return result;
    } else {
      return "error";
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export default { getUser, modifyUser, addtUser, deleteUser };
