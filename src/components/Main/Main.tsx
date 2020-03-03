import * as React from "react";
import styles from "./Main.module.css";
import AnswerPanel, {
	IAnswerPanelProps,
	IAnswer
} from "./AnswerPanel/AnswerPanel";
import { IMain } from "../../interfaces/IMain";

import { Questions } from "../../data/questions.js";

const Main: React.FC<IMain> = ({ isStarted, questionNumber }) => {
	const questions = Questions;
	console.log(questions);
	const answers = {
		answer1: {
			id: "answer1",
			value: "Answer 1"
		} as IAnswer,
		answer2: {
			id: "answer2",
			value: "Answer 2"
		} as IAnswer,
		answer3: {
			id: "answer3",
			value: "Answer 3"
		} as IAnswer,
		answer4: {
			id: "answer4",
			value: "Answer 4"
		} as IAnswer,
		correctAnswerId: "answer2"
	} as IAnswerPanelProps;

	const welcomeClass = [
		styles.welcomeLabel,
		isStarted && questionNumber > 0
			? styles.hide
			: ""
	].join(" ");
	const endClass = [
		styles.welcomeLabel,
		isStarted && questionNumber > questions.length
			? ""
			: styles.hide
	].join(" ");
	const questionClass = [
		styles.question,
		isStarted && questionNumber > 0 && questionNumber <= questions.length
			? ""
			: styles.hide
	].join(" ");
	const answersClass = [
		styles.answers,
		isStarted && questionNumber > 0 && questionNumber <= questions.length
			? ""
			: styles.hide
	].join(" ");

	console.log("Question Number:", questionNumber);
	return (
		<>
			<div className={questionClass}>
				{/* Is React with TypeScript better than Javascript? */}
				{questionNumber > 0 &&
					questionNumber <= questions.length &&
					questions[questionNumber - 1].question.value}
			</div>
			<h2 className={welcomeClass}>
				Welcome to the most difficult Javascript test!
			</h2>
            <h2 className={endClass}>
				TEST COMPLETED!!!
			</h2>
			<div className={answersClass}>
				<AnswerPanel {...answers} />
			</div>
		</>
	);
};

export default Main;
