import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

class LogTable extends Component {

    render() {
        return(
            <Table hover bordered>
                <thead>
                    <tr>
                    <th>ID #</th>
                    <th>Name</th>
                    <th>Memories</th>
                    <th>Validation State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>87521</td>
                    <td>Jane</td>
                    <td>I Like It</td>
                    <td>in process</td>
                    </tr>
                </tbody>
                </Table>
        )
    }
}