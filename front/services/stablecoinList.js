export const isStableCoin = (coin) => {
    let stables = [
        "usdc",
        "usdt",
        "usdd",
        "tusd",
        "frax",
        "busd",
        "dai",
        "usdp",
    ];
    if (stables.includes(coin)) {
        return false;
    } else {
        return true;
    }
};
