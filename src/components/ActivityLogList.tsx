import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type ActivityLog = {
  id: number
  unixTime: number
  isActive: boolean
  userId: number
}

type Props = {
  activityLogs: ActivityLog[]
}

const ActivityLogList = (props: Props) => (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">User ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.activityLogs.map(activityLog => (
              <TableRow
                key={activityLog.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{activityLog.id}</TableCell>
                <TableCell align="right">{(new Date(activityLog.unixTime)).toString()}</TableCell>
                <TableCell align="right">{activityLog.isActive ? 'Active' : 'Inactive'}</TableCell>
                <TableCell align="right">{activityLog.userId}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
)

export default ActivityLogList