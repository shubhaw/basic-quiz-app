import * as React from "react";
import styles from "./Main.module.css";
import AnswerPanel, { IAnswerPanelProps } from "./AnswerPanel/AnswerPanel";

const Main: React.FC = () => {
	const answers = {
		answer1: "Answer 1",
		answer2: "Answer 2",
		answer3: "Answer 3",
		answer4: "Answer 4 is wrong. But I am testing the size. Let's see what happens if it goes multiline. It overflows!!!",
		correctAnswer: "answer2"
	} as IAnswerPanelProps;

	return (
		<div className={styles.main}>
			<div className={styles.question}>Will you succeed if you carry forward with your learnings?</div>
			<div className={styles.answers}>
				<AnswerPanel {...answers} />
			</div>
		</div>
	);
};

export default Main;
