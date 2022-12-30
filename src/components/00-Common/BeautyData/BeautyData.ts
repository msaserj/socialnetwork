
export const BeautyDate = (date?: Date) => {
    return new Date(date ? date : '').toLocaleString("en", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    })
};

export const dateAgo = (date: any) => {
    const time: number = Math.ceil( new Date().getTime() - new Date(date).getTime());
    const last = Math.ceil(time/12960000)

    if(last < 60) {
        return last + " min. ago"
    } else if(last > 60 && last < 1440) {
        return Math.ceil(last / 60) + " h ago"
    } else if (last > 1440 && last < 43200) {
        return Math.ceil(last / 1440) + " days ago"
    } else if (last > 43200 && last < 518400) {
        return Math.ceil(last / 43200) + " months ago"
    } else if (last > 518400) {
        return new Date(date).toLocaleString("en", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
    }
};
export const isOnline = (date: any) => {
    const time: number = Math.ceil( new Date().getTime() - new Date(date).getTime());
    return Math.ceil(time / 12960000) < 15

};
