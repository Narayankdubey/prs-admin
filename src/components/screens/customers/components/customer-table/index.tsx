"use client"
import { DataTable } from "@/components/general";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { getAllCustomers } from "../../action";

type Props = {};

const CustomerTable = (props: Props) => {
  const dispatch = useAppDispatch();

  const { customersList } = useAppSelector((state) => state.customer);
console.log(customersList,'customersList')
  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  return (
    <div>
      <DataTable
        columns={[
          {
            accessorKey: "name",
            header: "Name",
          },
          {
            accessorKey: "mobile",
            header: "Phone Number",
          },
          {
            accessorKey: "email",
            header: "Email",
          },
          {
            accessorKey: "serviceType",
            header: "Sales/Service",
          },
          {
            accessorKey: "productName",
            header: "Product Name",
          },
          {
            accessorKey: "dateOfActivity",
            header: "Date",
          },
          {
            accessorKey: "totalAmount",
            header: "Total Amount",
          },
          {
            accessorKey: "paidAmount",
            header: "Amount Paid",
          },
        ]}
        data={customersList || []}
      />
    </div>
  );
};

export default CustomerTable;
