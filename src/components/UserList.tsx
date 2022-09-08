import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import type { User } from '@/types/user';

type Props = {
  users: User[]
}

const UserList = (props: Props) => {
  const router = useRouter()
  const onEditClick = (userId: number) => {
    router.replace(`/users/${userId}/edit`)
  }
  const onDeleteClick = (userId: number) => {
    router.replace(`/users/${userId}/delete`)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">NFC ID</TableCell>
            <TableCell align='center'>Edit</TableCell>
            <TableCell align='center'>Delete</TableCell>
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
                <TableCell align='center'><IconButton onClick={() => onEditClick(user.id)}><ModeIcon /></IconButton></TableCell>
                <TableCell align='center'><IconButton onClick={() => onDeleteClick(user.id)}><DeleteIcon /></IconButton></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserList