import css from '../styles/Input.module.css';

const Button = ({ label, onClick }) => {
	return (
		<button className={css.button} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;