import sha1 from "sha1";
const confirm = async(query) => {
  try {
    const token = "1dd982cb081d44ac9e647cde8388093f";
    const { signature, timestamp, nonce, echostr } = query;
    const str = [token, timestamp, nonce].sort().join("");
    const sha = sha1(str);
    if (signature === sha) {
      return echostr;
    } else {
      return "error";
    }
  } catch (error) {
    throw error;
  }
};

export default confirm;