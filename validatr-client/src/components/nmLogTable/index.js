import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

class NmLogTable extends Component {

    render() {
        return(
            <Table hover bordered>
                <thead>
                    <tr>
                    <th>ID #</th>
                    <th>Name</th>
                    <th>Memories</th>
                    <th>Photo</th>
                    <th>Validation State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>87521</td>
                    <td>Jane 87521</td>
                    <td>I Like It</td>
                    <td>photo here</td>
                    <td>in process</td>
                    </tr>
                </tbody>
                </Table>
        )
    }
}

export default NmLogTable;