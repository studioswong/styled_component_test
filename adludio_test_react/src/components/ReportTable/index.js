import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid black;
`;

const Th = styled.th`
  border: 1px solid black;
`;

const Td = styled.td`
  border: 1px solid black;
`;

export default function ReportTable(props) {
    return (
      <Table>
        <tr>
          <Th>type</Th>
          <Th>date</Th>
          <Th>id_insertion_order</Th>
          <Th>id_adunit</Th>
          <Th>id_channel</Th>
          <Th>country</Th>
          <Th>platform</Th>
          <Th>device type</Th>
          <Th>browser</Th>
          <Th>browser version</Th>
          <Th>is_unique</Th>
          <Th>value</Th>
        </tr>
          {
            props.data.map(row => {
              return(
              <tr>
                <Td>{row.type}</Td>
                <Td>{row.date}</Td>
                <Td>{row.id_insertion_order}</Td>
                <Td>{row.id_adunit}</Td>
                <Td>{row.id_channel}</Td>
                <Td>{row.country}</Td>
                <Td>{row.platform}</Td>
                <Td>{row.deviceType}</Td>
                <Td>{row.browser}</Td>
                <Td>{row.browserVersion}</Td>
                <Td>{row.is_unique}</Td>
                <Td>{row.value}</Td>
              </tr>
              )
            })
          }
      </Table>
  );
};