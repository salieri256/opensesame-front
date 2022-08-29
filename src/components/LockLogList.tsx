import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type LockLog = {
  id: number
  unixTime: number
  isLocked: boolean
  doorId: number
  userId: number
}

type Props = {
  lockLogs: LockLog[]
}

const LockLogList = (props: Props) => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Door ID</TableCell>
            <TableCell align="right">User ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.lockLogs.map(lockLog => (
              <TableRow
                key={lockLog.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{lockLog.id}</TableCell>
                <TableCell align="right">{(new Date(lockLog.unixTime)).toString()}</TableCell>
                <TableCell align="right">{lockLog.isLocked ? 'Locked' : 'Unlocked'}</TableCell>
                <TableCell align="right">{lockLog.doorId}</TableCell>
                <TableCell align="right">{lockLog.userId}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
)

export default LockLogList