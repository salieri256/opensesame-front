import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// TBLのモデル定義
function createData(
  id: number,
  userId: number,
  active: boolean,
  date: string,
) {
  return { id, userId, active, date };
}

// 実データ
const rows = [
  createData(1, 1, true, '2022/08/12 12:45:36'),
  createData(2, 1, false, '2022/08/12 12:53:47'),
  createData(3, 2, true, '2022/08/12 14:23:56'),
  createData(4, 3, true, '2022/08/12 15:03:22'),
  createData(5, 2, false, '2022/08/12 15:32:49'),
];

const LogTable = () => {
  return (
    <TableContainer sx={{ maxWidth: 1000 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.userId}</TableCell>
              <TableCell>{row.active ? 'Active' : 'Inactive'}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LogTable