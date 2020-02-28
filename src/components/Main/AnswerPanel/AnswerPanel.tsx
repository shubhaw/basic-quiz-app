import * as React from "react";
import {
	Stack,
	DefaultButton,
	IStackTokens,
	IButtonStyles,
	PrimaryButton,
	IIconProps,
	initializeIcons
} from "office-ui-fabric-react";

export interface IAnswerPanelProps {
	answer1: string;
	answer2: string;
	answer3: string;
	answer4: string;
	correctAnswer: string;
}

const stackTokens: IStackTokens = { childrenGap: 20 };
const buttonStyle: IButtonStyles = {
	root: {
		height: "auto",
		width: "263px",
		padding: "15px 10px"
	}
};

const iconButtonStyle: IButtonStyles = {
    ...buttonStyle,
    flexContainer: {
        flexDirection: 'row-reverse'
    }
}

const backButtonColor = '#AAA'

initializeIcons();

const backIcon: IIconProps = { iconName: "Back" };
const nextIcon: IIconProps = { iconName: "Forward" };

const AnswerPanel: React.FC<IAnswerPanelProps> = props => {
	return (
		<Stack horizontal wrap tokens={stackTokens}>
			<DefaultButton styles={buttonStyle} text={props.answer1} />
			<DefaultButton styles={buttonStyle} text={props.answer2} />
			<DefaultButton styles={buttonStyle} text={props.answer3} />
			<DefaultButton styles={buttonStyle} text={props.answer4} />
			<DefaultButton
				iconProps={backIcon}
                styles={buttonStyle}
                style={
                    {
                        backgroundColor: `${backButtonColor}`
                    }
                }
				text={"Back"}
			/>
			<PrimaryButton
				iconProps={nextIcon}
				styles={iconButtonStyle}
				text={"Next"}
			/>
		</Stack>
	);
};

export default AnswerPanel;
