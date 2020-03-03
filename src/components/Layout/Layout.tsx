import * as React from "react";
import styles from "./Layout.module.css";
import NavigationPanel from "../Main/NavigationPanel/NavigationPanel";
import Main from "../Main/Main";
import { Questions } from "../../data/questions";

const Layout: React.FC = props => {
	const [started, setStarted] = React.useState(false);
	const [questionNumber, setQuestionNumber] = React.useState(0);
	const startHandler = () => {
        setStarted(true);
        setQuestionNumber(1);
	};

	const nextHandler = () => {
        setQuestionNumber(questionNumber + 1);
        if(questionNumber === Questions.length) {
            alert('Test Completed!');
        }
	};

	const backHandler = () => {
        if(questionNumber <= 1) {
            setStarted(false);
        }
        setQuestionNumber(questionNumber - 1);
	};

	return (
		<div className={styles.Layout}>
			<div className={styles.Card}>
				<Main isStarted={started} questionNumber={questionNumber} questions={Questions} />
				<NavigationPanel
					isStarted={started}
					startClickHandler={startHandler}
					nextClickHandler={nextHandler}
					backClickHandler={backHandler}
				/>
			</div>
		</div>
	);
};

export default Layout;
