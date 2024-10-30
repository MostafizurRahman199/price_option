export const randomColor = () => {
    const gradients = [
        'bg-gradient-to-r from-purple-400 to-pink-400',
        'bg-gradient-to-r from-blue-400 to-blue-600',
        'bg-gradient-to-r from-green-400 to-green-600',
        'bg-gradient-to-r from-yellow-400 to-yellow-500',
        'bg-gradient-to-r from-red-400 to-red-600',
        'bg-gradient-to-r from-teal-400 to-teal-600',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
};
