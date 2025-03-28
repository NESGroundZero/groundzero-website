export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit'
    });
};