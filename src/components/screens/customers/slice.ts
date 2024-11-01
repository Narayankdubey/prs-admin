import { createSlice } from "@reduxjs/toolkit";
import { bulkCreateCustomer, createCustomer, getAllCustomers } from "./action";

export interface CustomerState {
  isLoading: boolean;
  customersList: [];
  bulkLoading: boolean;
  bulkRes: Record<string, string>;
}

const initialState: CustomerState = {
  isLoading: false,
  bulkLoading: false,
  customersList: [],
  bulkRes: {},
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //create
    builder.addCase(createCustomer.pending, (state, action) => {});
    builder.addCase(createCustomer.fulfilled, (state, action) => {});
    builder.addCase(createCustomer.rejected, (state, action) => {});

    //bulk create
    builder.addCase(bulkCreateCustomer.pending, (state, action) => {
      state.bulkLoading = true;
    });
    builder.addCase(bulkCreateCustomer.fulfilled, (state, action) => {
      state.bulkLoading = false;
      state.bulkRes = action.payload;
    });
    builder.addCase(bulkCreateCustomer.rejected, (state, action) => {
      state.bulkLoading = false;
    });

    //G E T  C U S T O M E R
    builder.addCase(getAllCustomers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.customersList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllCustomers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = customerSlice.actions;

export default customerSlice.reducer;
