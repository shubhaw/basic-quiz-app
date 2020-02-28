import * as React from "react";
import styles from "./AnswerPanel.module.css";
import { Stack, DefaultButton, IStackTokens } from "office-ui-fabric-react";

export interface IAnswerPanelProps {
	answer1: string;
	answer2: string;
	answer3: string;
	answer4: string;
	correctAnswer: string;
}

const stackTokens: IStackTokens = { childrenGap: 20 };
const AnswerPanel: React.FC<IAnswerPanelProps> = props => {
	return (
		<Stack horizontal wrap tokens={stackTokens}>
			<DefaultButton text={props.answer1} />
			<DefaultButton text={props.answer2} />
			<DefaultButton text={props.answer3} />
			<DefaultButton text={props.answer4} />
		</Stack>
	);
};

export default AnswerPanel;
