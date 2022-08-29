import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type User = {
  id: number
  name: string
  isActive: boolean
  nfcId: string
}

type Props = {
  users: User[]
}

const UserList = (props: Props) => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">NFC ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.users.map(user => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.isActive ? 'Active' : 'Inactive'}</TableCell>
                <TableCell align="right">{user.nfcId}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
)

export default UserList