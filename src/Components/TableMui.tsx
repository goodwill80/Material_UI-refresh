import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

import { TableData } from '../Data';

function TableMui() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        border: '1px solid rgba(128,128,128,0.4)',
        width: 'max-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 4,
        borderRadius: 2,
        maxHeight: 500,
      }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: 'yellow',
              borderBottom: '2px solid black',
              '& th': {
                fontSize: '1.25rem',
                color: 'rgba(96, 96, 96)',
                backgroundColor: 'yellow',
              },
            }}
          >
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            '& tr:nth-of-type(2n+1)': {
              backgroundColor: 'grey.100',
            },
          }}
        >
          {TableData.map((row, i) => (
            <>
              <TableRow
                key={i}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  //   '& td': { border: 1 },
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableMui;
