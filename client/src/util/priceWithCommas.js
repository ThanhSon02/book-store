export default function priceWithCommas(priceTypeNumber) {
    return priceTypeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
