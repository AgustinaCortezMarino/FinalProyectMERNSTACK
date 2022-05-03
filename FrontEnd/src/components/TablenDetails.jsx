import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Generate Order Data
function createData(id, name, map, lat, long, image) {
  return { id, name, map, lat, long, image };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

const TablenDetails = () => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Lugar</TableCell>
          <TableCell>Ubicacion</TableCell>
          <TableCell>Latitud</TableCell>
          <TableCell>Longitud</TableCell>
          <TableCell>Fotos</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.map}</TableCell>
            <TableCell>{row.lat}</TableCell>
            <TableCell>{row.long}</TableCell>
            <TableCell>{row.image}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TablenDetails;
