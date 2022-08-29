import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Door = {
  id: number
  name: string
  isLocked: boolean
}

type Props = {
  doors: Door[]
}

const DoorList = (props: Props) => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Status</TableCell>
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
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
)

export default DoorList