import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditButton from '../components/EditButton';

// TBLのモデル定義
function createData(
  id: number,
  name: string,
  active: boolean,
  nfcIdList: string,
) {
  return { id, name, active, nfcIdList };
}

// 実データ
const rows = [
  createData(1, 'Taro Yamada', true, '0123************'),
  createData(2, 'Hanako Kosen', true, 'fedc************'),
  createData(3, 'さりえり', false, '1357************'),
  createData(4, 'りえりさ', false, 'fdb0************'),
  createData(5, 'あ', true, 'a01b************'),
];

const UserTable = () => {
  return (
    <TableContainer sx={{ maxWidth: 1000 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>NFC ID</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.active ? 'Active' : 'Inactive'}</TableCell>
              <TableCell>{row.nfcIdList}</TableCell>
              <TableCell><EditButton /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable