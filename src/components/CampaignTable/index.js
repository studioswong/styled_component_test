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

export default function CampaignTable(props) {
    return (
      <Table>
        <tr>
          <Th>id</Th>
          <Th>id_insertion_order</Th>
          <Th>name</Th>
          <Th>description</Th>
          <Th>status</Th>
          <Th>active_time</Th>
          <Th>expire_time</Th>
          <Th>type</Th>
          <Th>priority</Th>
          <Th>created at</Th>
          <Th>modified at</Th>
        </tr>
          {
            props.data.map(row => {
              return(
              <tr>
                <Td>{row.id}</Td>
                <Td>{row.id_insertion_order}</Td>
                <Td>{row.name}</Td>
                <Td>{row.description}</Td>
                <Td>{row.status}</Td>
                <Td>{row.active_time}</Td>
                <Td>{row.expire_time}</Td>
                <Td>{row.type}</Td>
                <Td>{row.priority}</Td>
                <Td>{row.created_at}</Td>
                <Td>{row.modified_at}</Td>
              </tr>
              )
            })
          }
      </Table>
  );
};