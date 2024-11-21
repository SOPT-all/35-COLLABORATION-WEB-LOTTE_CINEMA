const runningTimeFormat = (time: number): string => {
	const hour = Math.floor(time / 60);
	const minute = time % 60;

	return `${hour}시 ${minute}분`;
};

export default runningTimeFormat;
