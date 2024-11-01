import { ApiUrl } from "@/common/apiPath";
import api from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const CREATE_CUSTOMER = "CUSTOMER/CREATE_CUSTOMER";
const BULK_CREATE_CUSTOMER = "CUSTOMER/BULK_CREATE_CUSTOMER";
const GET_CUSTOMERS_LIST = "CUSTOMER/GET_CUSTOMERS_LIST";

export const createCustomer = createAsyncThunk(
  CREATE_CUSTOMER,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(ApiUrl.createCutomer, payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const bulkCreateCustomer = createAsyncThunk(
  BULK_CREATE_CUSTOMER,
  async (payload: {file: File} , { rejectWithValue }) => {
    try {
      const response = await api.post(ApiUrl.importCustomers, payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllCustomers = createAsyncThunk(
  GET_CUSTOMERS_LIST,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(ApiUrl.getCustomer);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
