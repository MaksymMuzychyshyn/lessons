const msInSec = 1000;
const msInMin = msInSec * 60;
const msInHour = msInMin * 60;
const msInDay = msInHour * 24;

export const getDiff = (startDate, endDate) => {
    const diff = Math.abs(startDate.getTime() - endDate.getTime());

    const diffDays = Math.floor(diff / msInDay);
    const diffHours = Math.floor((diff % msInDay) / msInHour);
    const diffMins = Math.floor((diff % msInHour) / msInMin);
    const difSec = Math.floor((diff % msInMin) / msInSec);
    
    return `${diffDays}d ${diffHours}h ${diffMins}m ${difSec}s`;
}