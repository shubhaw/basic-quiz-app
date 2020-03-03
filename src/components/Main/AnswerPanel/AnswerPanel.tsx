import * as React from "react";
import {
	Stack,
	DefaultButton,
	IStackTokens,
	IButtonStyles,
	mergeStyles
} from "office-ui-fabric-react";

export interface IAnswer {
	id: string;
	value: string;
}

export interface IAnswerPanelProps {
	answer1: IAnswer;
	answer2: IAnswer;
	answer3: IAnswer;
	answer4: IAnswer;
	correctAnswerId: string;
	answerSelectedHandler(selectedAnswerId: string): void;
}


export const buttonStyle: IButtonStyles = {
    root: {
        height: "auto",
        width: "263px",
        padding: "15px 10px"
    }
};

export const stackTokens: IStackTokens = { childrenGap: 20 };

const AnswerPanel: React.FC<IAnswerPanelProps> = props => {
	

	const [button1ClassName, setButton1ClassName] = React.useState("");
	const [button2ClassName, setButton2ClassName] = React.useState("");
	const [button3ClassName, setButton3ClassName] = React.useState("");
	const [button4ClassName, setButton4ClassName] = React.useState("");

	

	const answerSelectHandler = (
		selectedAnswerId: string,
		buttonNumber: number
	): void => {
		let styledClassName = "";

		if (selectedAnswerId === props.correctAnswerId) {
			console.log("Right Answer");
			styledClassName = mergeStyles({
				backgroundColor: "green",
				color: "white",
				selectors: {
					":hover": {
						backgroundColor: "green",
						color: "white"
					}
				}
			});
		} else {
			console.log("Wrong Answer");
			styledClassName = mergeStyles({
				backgroundColor: "red",
				color: "white",
				selectors: {
					":hover": {
						backgroundColor: "red",
						color: "white"
					}
				}
			});
		}

		switch (buttonNumber) {
			case 1:
				setButton1ClassName(styledClassName);
				break;
			case 2:
				setButton2ClassName(styledClassName);
				break;
			case 3:
				setButton3ClassName(styledClassName);
				break;
			case 4:
				setButton4ClassName(styledClassName);
				break;
		}
	};

	return (
		<Stack horizontal wrap tokens={stackTokens}>
			<DefaultButton
				className={button1ClassName}
				styles={buttonStyle}
				text={props.answer1.value}
				onClick={() => answerSelectHandler(props.answer1.id, 1)}
			/>
			<DefaultButton
				className={button2ClassName}
				styles={buttonStyle}
				text={props.answer2.value}
				onClick={() => answerSelectHandler(props.answer2.id, 2)}
			/>
			<DefaultButton
				className={button3ClassName}
				styles={buttonStyle}
				text={props.answer3.value}
				onClick={() => answerSelectHandler(props.answer3.id, 3)}
			/>
			<DefaultButton
				className={button4ClassName}
				styles={buttonStyle}
				text={props.answer4.value}
				onClick={() => answerSelectHandler(props.answer4.id, 4)}
			/>
			
		</Stack>
	);
};

export default AnswerPanel;
