import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";

const Product = () => {
  const tableRef = useRef();

  useEffect(() => {
    $(tableRef.current).DataTable();
  }, []);

  const data = [
    {
      product: "Red Bull",
      buyingPrice: 200,
      quantity: "12 packets",
      thresholdValue: "12 packets",
      expiryDate: "11/02/2023",
      availability: "in stock",
    },
    {
      product: "Red Bull",
      buyingPrice: 200,
      quantity: "12 packets",
      thresholdValue: "12 packets",
      expiryDate: "11/02/2023",
      availability: "in stock",
    },
    {
      product: "Red Bull",
      buyingPrice: 200,
      quantity: "12 packets",
      thresholdValue: "12 packets",
      expiryDate: "11/02/2023",
      availability: "in stock",
    },
  ];

  const rows = data.map((row, index) => {
    return (
      <tr key={index} className="border-b">
        <td className="text-left border-b">{row.product}</td>
        <td className="text-left border-b">{row.buyingPrice}</td>
        <td className="text-left border-b">{row.quantity}</td>
        <td className="text-left border-b">{row.thresholdValue}</td>
        <td className="text-left border-b">{row.expiryDate}</td>
        <td className="text-left border-b">{row.availability}</td>
      </tr>
    );
  });

  return (
    <div className="mt-16px shadow-xl bg-white-50 p-4">
      <table ref={tableRef} className="table-auto w-full ">
        <thead>
          <tr>
            <td colSpan="6" className="w-full">
              <div className="flex justify-between items-center px-4 py-2 ">
                <div>
                  <h1 className="text-xl font-bold">Product</h1>
                </div>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button 1
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Button 2
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Button 3
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="text-center">Product</th>
            <th className="text-center">Buying Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Threshold Value</th>
            <th className="text-center">Expiry Date</th>
            <th className="text-center">Availability</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Product;
