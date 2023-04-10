import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

import { HiPencilSquare, HiTrash } from "./Icons";

import { useSelector } from "react-redux";

export default function ListOfUsers() {
  const users = useSelector(state => state.users)
  
	return (
		<Card>
			<Title>
				Usuarios
				<Badge style={{ marginLeft: "8px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell> Id </TableHeaderCell>
						<TableHeaderCell> Nombre </TableHeaderCell>
						<TableHeaderCell> Email </TableHeaderCell>
						<TableHeaderCell> Acciones </TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell style={{ display: "flex", alignItems: "center" }}>
								<img
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										marginRight: "8px",
									}}
									src={`https://unavatar.io/github/${item.github}`}
									alt={item.name}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell style={{ display: "flex", gap: "3px" }}>
								<button type="button">
									<HiPencilSquare />
								</button>
								<button type="button">
									<HiTrash />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
