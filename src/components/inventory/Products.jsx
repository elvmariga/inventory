import React, { Component } from "react";
import $ from "jquery";
import "datatables.net";

class Product extends Component {
  componentDidMount() {
    $(this.refs.myTable).DataTable();
  }

  render() {
    const data = [
      { name: "John", age: 25, city: "New York" },
      { name: "Jane", age: 30, city: "Los Angeles" },
      { name: "Bob", age: 40, city: "Chicago" },
    ];

    const rows = data.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.age}</td>
          <td>{row.city}</td>
        </tr>
      );
    });

    return (
      <table ref="myTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Product;
