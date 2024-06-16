import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
	const [formInputs, setFormInputs] = useState({});

	function handleSubmit() {
		console.log("SUBMIT FORM:", formInputs);
	}

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setFormInputs((currValues) => ({ ...currValues, [name]: value }));
	}

	return (
		<main className="w-full flex text-white bg-paper-texture bg-cover">
			<form
				className="w-full md:w-1/2 h-screen bg-gray-500 bg-opacity-80 shadow-2xl shadow-gray-200 flex justify-center items-center flex-col gap-6"
				onSubmit={handleSubmit}
			>
				<span className="text-2xl font-bold mb-10">Practice Notes App</span>
				<div className="flex flex-col gap-2 w-3/4 md:w-1/2">
					<label>
						Username:
						<input
							value={formInputs?.username || ""}
							onChange={handleChange}
							className="bg-white text-green-400 border rounded px-2 py-1 w-full"
							type="text"
							name="username"
							required
						></input>
					</label>
				</div>
				<div className="flex flex-col gap-2 w-3/4 md:w-1/2">
					<label>
						Password:
						<input
							value={formInputs?.password || ""}
							onChange={handleChange}
							className="bg-white text-green-400 border rounded px-2 py-1 w-full"
							type="password"
							name="password"
							required
						></input>
					</label>
					<Link to={"/signUp"} className="hover:underline text-sm ml-1">
						Register Here
					</Link>
				</div>

				<button
					className="bg-green-300 rounded-full px-4 py-2 mt-2 font-semibold transition-all  disabled:bg-gray-300 enabled:hover:scale-105"
					disabled={
						formInputs?.password?.length === 0 ||
						formInputs?.username?.length === 0
					}
					type="submit"
				>
					Login
				</button>
			</form>
		</main>
	);
}

export default SignIn;
