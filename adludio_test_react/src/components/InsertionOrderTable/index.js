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

export default function InsertionOrderTable(props) {
    return (
      <Table>
        <tr>
          <Th>id</Th>
          <Th>name</Th>
          <Th>description</Th>
          <Th>id_account_manager</Th>
          <Th>id_channel</Th>
          <Th>id_brand</Th>
          <Th>id_agency</Th>
          <Th>created at</Th>
          <Th>modified at</Th>
        </tr>
          {
            props.data.map(row => {
              return(
              <tr>
                <Td>{row.id}</Td>
                <Td>{row.name}</Td>
                <Td>{row.description}</Td>
                <Td>{row.id_account_manager}</Td>
                <Td>{row.id_channel}</Td>
                <Td>{row.id_brand}</Td>
                <Td>{row.id_agency}</Td>
                <Td>{row.created_at}</Td>
                <Td>{row.modified_at}</Td>
              </tr>
              )
            })
          }
      </Table>
  );
};