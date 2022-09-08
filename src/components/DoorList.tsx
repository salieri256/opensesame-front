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
import type { Door } from '@/types/door';

type Props = {
  doors: Door[]
}

const DoorList = (props: Props) => {
  const router = useRouter()
  const onEditClick = (doorId: number) => {
    router.replace(`/doors/${doorId}/edit`)
  }
  const onDeleteClick = (doorId: number) => {
    router.replace(`/doors/${doorId}/delete`)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align='center'>Edit</TableCell>
            <TableCell align='center'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.doors.map(door => (
              <TableRow
              key={door.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{door.id}</TableCell>
                <TableCell align="right">{door.name}</TableCell>
                <TableCell align="right">{door.isLocked ? 'Locked' : 'Unlocked'}</TableCell>
                <TableCell align='center'><IconButton onClick={() => onEditClick(door.id)}><ModeIcon /></IconButton></TableCell>
                <TableCell align='center'><IconButton onClick={() => onDeleteClick(door.id)}><DeleteIcon /></IconButton></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DoorList