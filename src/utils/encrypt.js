import CryptoJS from "crypto-js";
import { ARM_BANK_CODE } from "../constants";

const AES_KEY_FOR_DETAILS_REQUEST = "ZpJFemkqxFmkyvEZW/8xSA==";
const HMAC_AND_AES_KEY_FOR_ENC_REQUEST = "lM97ez5aC0taf/qj5VLCIQ==";

// const AES_KEY_FOR_DETAILS_REQUEST = "4pJFemkqxFmkyvEZW/8xSA==";
// const HMAC_AND_AES_KEY_FOR_ENC_REQUEST = "lM973z5aC5taf/qj5VLCIQ==";

// Function to perform AES encryption
export const aesEncrypt = (jsonObject, key) => {
  const data = JSON.stringify(jsonObject);
  const iv = new Uint8Array(16);

  const keyBytes = CryptoJS.enc.Utf8.parse(key);
  const ivBytes = CryptoJS.lib.WordArray.create(iv);

  const encrypted = CryptoJS.AES.encrypt(data, keyBytes, { iv: ivBytes });

  // Return the encrypted data as a string
  return encrypted.toString(CryptoJS.format.Base64);
};

// Function to generate HMAC
export const generateHmac = (message, secretKey) => {
  const hmac = CryptoJS.HmacSHA512(message, secretKey);
  return CryptoJS.enc.Base64.stringify(hmac);
};

export const encrypt = ({
  amount,
  acct_number,
  recipient_account,
  recipient_name,
  bank_name,
  pin,
  username,
}) => {
  const BANK_CODE = ARM_BANK_CODE;
  const narration = "Sample Transfer";
  const tpin = pin;
  const transaction_ref =
    "ARM-1234-001-123456-7890-" + parseInt(Math.random() * 1000000000);

  console.log(transaction_ref);
  const current_date = new Date()
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-"); // dd-MM-yyyy

  // Step 1: Create details request and encrypt it using AES
  const transfer_funds_params = {
    d_At: acct_number,
    c_At: recipient_account,
    c_AN: recipient_name,
    b_B: bank_name,
    b_C: BANK_CODE,
    p_A: amount,
    n_R: narration,
    t_T: "2",
    t_P: tpin,
    s_ID: "",
    t_R: transaction_ref,
  };

  console.log(transfer_funds_params);

  // Convert transfer_funds_params to JSON
  const detailsRequestJson = transfer_funds_params;
  console.log(detailsRequestJson);
  const encryptedDetailsRequest = aesEncrypt(
    detailsRequestJson,
    AES_KEY_FOR_DETAILS_REQUEST
  );

  // Step 2: Generate HMAC for enc request
  const message = `${transaction_ref}${acct_number}${recipient_account}${current_date}${amount}${username}${BANK_CODE}`;
  console.log(message);
  const encRequestHmac = generateHmac(
    message,
    HMAC_AND_AES_KEY_FOR_ENC_REQUEST
  );

  console.log(encRequestHmac);
  console.log(message);

  // Step 3: Encrypt HMAC using AES
  const encryptedEncRequest = aesEncrypt(
    encRequestHmac,
    HMAC_AND_AES_KEY_FOR_ENC_REQUEST
  );

  // Step 4: Build final payload
  return {
    encRequest: encryptedEncRequest,
    detailsRequest: encryptedDetailsRequest,
  };
};
