import { useEffect, useState } from "react";
const Users = () => {
	const [userlist, setUserlist] = useState([]);
	const liArray = [1, 2, 3, 4, 5];
	const [selectState, setSelectState] = useState(5);
	const [page, setPage] = useState(1);
	useEffect(() => {
		console.log("useeffect works!");
		fetch(
			"https://api.github.com/users?per_page=" + selectState + "&since=" + page
		)
			.then((res) => res.json())
			.then((data) => setUserlist(data));
	}, [selectState, page]);
	return (
		<>
			<div
				style={{
					display: "flex",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					gap: 50,
					background: "#000000",
					color: "white",
					padding: 20,
				}}
			>
				<div>
					<ul
						style={{
							display: "flex",
							gap: "10px",
						}}
					>
						{liArray.map((el, i) => {
							return (
								<li
									onClick={() => {
										setPage(i);
									}}
									style={{
										listStyle: "none",
										background: "#0F7173",
										color: "white",
										fontWeight: "500",
										padding: "5px 10px",
										borderRadius: "4px",
									}}
									key={i}
								>
									{el}
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					<select onChange={(e) => setSelectState(e.target.value)}>
						<option>5</option>
						<option>10</option>
						<option>25</option>
						<option>50</option>
						<option>75</option>
						<option>100</option>
					</select>
				</div>
			</div>
			<div
				style={{
					width: "100%",
					margin: "0 auto",
					minHeight: "100vh",
					background: "#cccccc",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{userlist.map((user) => (
					<a href={"localhost" + user.id} key={user.id}>
						<span
							href={user.login}
							style={{
								display: "inline-flex",
								flexDirection: "column",
								alignItems: "center",
								fontWeight: 500,
								color: "#00000098",
								margin: "15px",
							}}
						>
							<img
								style={{ borderRadius: "50%" }}
								width={100}
								height={100}
								src={user.avatar_url}
								alt={"images"}
							/>
							{user.login}
						</span>
					</a>
				))}
			</div>
		</>
	);
};

export default Users;
