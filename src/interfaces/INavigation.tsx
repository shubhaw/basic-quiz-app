export interface INavigation {
	isStarted: boolean;
	startClickHandler?(): void;
	nextClickHandler?(): void;
	backClickHandler?(): void;
}
