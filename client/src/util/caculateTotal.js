export const caculateTotal = (list) => {
    return list.reduce((accumulator, currentvalue) => {
        return (
            accumulator +
            Math.ceil(
                currentvalue.book.price *
                    (1 - currentvalue.book.discount / 100) *
                    currentvalue.quantity
            )
        );
    }, 0);
};
