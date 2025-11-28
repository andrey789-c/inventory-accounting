'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { RegisterForm } from "./RegisterForm";
// import { LoginForm } from "./LoginForm";

export const AuthModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isRegister, setIsRegister] = useState(true);

	const toggleMode = () => setIsRegister(!isRegister);

	const handleRegister = (data: any) => {
		console.log("Регистрация:", data);
		setIsOpen(false);
	};

	const handleLogin = (data: any) => {
		console.log("Вход:", data);
		setIsOpen(false);
	};

	return (
		<div>
			<Button onClick={() => setIsOpen(true)}>Вход / Регистрация</Button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							className="bg-white rounded-xl p-6 w-full max-w-md relative"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
						>
							<button
								className="absolute top-3 right-3 text-gray-500 text-2xl"
								onClick={() => setIsOpen(false)}
							>
								×
							</button>

							<h2 className="text-2xl font-bold mb-4 text-center">
								{isRegister ? "Регистрация" : "Вход"}
							</h2>

							{/* {isRegister ? (
								<RegisterForm onSubmit={handleRegister} />
							) : (
								<LoginForm onSubmit={handleLogin} />
							)} */}

							<p className="mt-4 text-center text-gray-500">
								{isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
								<button
									className="text-blue-500 hover:underline"
									onClick={toggleMode}
								>
									{isRegister ? "Войти" : "Зарегистрироваться"}
								</button>
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
