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
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row, i) => (
            <>
              <TableRow key={i}>
                <TableCell rowSpan={3}>{row.id}</TableCell>
              </TableRow>
              <TableRow
                key={i}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
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
