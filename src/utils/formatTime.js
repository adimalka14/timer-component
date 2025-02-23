const BIG_FONT_SIZE = 50;
const MEDIUM_FONT_SIZE = 30;
const SMALL_FONT_SIZE = 20;

const totalSecondsToHours = (totalSeconds) => Math.floor(totalSeconds / 3600);
const totalSecondsToMinutes = (totalSeconds) => Math.floor((totalSeconds % 3600) / 60);
const totalSecondsToSeconds = (totalSeconds) => totalSeconds % 60;

const formatTime = (totalSeconds) => {
    const hours = totalSecondsToHours(totalSeconds);
    const minutes = totalSecondsToMinutes(totalSeconds);
    const seconds = totalSecondsToSeconds(totalSeconds);

    return `${hours ? `${hours.toString().padStart(2, '0')}:` : ''}` +
        `${hours || minutes ? `${minutes.toString().padStart(2, '0')}:` : ''}` +
        `${seconds.toString().padStart(2, '0')}`;
};

const getFontSize = (totalSeconds) => {
    const hours = totalSecondsToHours(totalSeconds);
    const minutes = totalSecondsToMinutes(totalSeconds);

    if (hours > 0) {
        return SMALL_FONT_SIZE;
    } else if (minutes > 0) {
        return MEDIUM_FONT_SIZE;
    } else {
        return BIG_FONT_SIZE;
    }
};

export { formatTime, getFontSize };