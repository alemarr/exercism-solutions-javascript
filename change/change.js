export class Change {
  calculate(coins, target) {
    // Step 1: Validate inputs
    if (!Array.isArray(coins) || coins.length === 0) {
      throw new Error("Coins array must be a non-empty array.");
    }
    if (typeof target !== "number" || target < 0) {
      throw new Error("Negative totals are not allowed.");
    }
    if (target === 0) {
      return [];
    }

    // Step 2: Create an array dp where dp[i] represents the minimum number of coins needed to make the amount i
    const dp = Array(target + 1).fill(Infinity);
    const coinUsed = Array(target + 1).fill(-1);

    // Step 3: Initialize dp[0] to 0 because zero coins are needed to make the amount 0
    dp[0] = 0;

    // Step 4: Iterate through each coin
    for (let coin of coins) {
      // Update the dp array for each amount from the coin value to the target
      for (let amount = coin; amount <= target; amount++) {
        if (dp[amount - coin] + 1 < dp[amount]) {
          dp[amount] = dp[amount - coin] + 1;
          coinUsed[amount] = coin;
        }
      }
    }

    // Step 5: Check if it's possible to make the target amount
    if (dp[target] === Infinity) {
      throw new Error(
        `The total ${target} cannot be represented in the given currency.`
      );
    }

    // Step 6: Backtrack from the target to find the coins used to make up the amount
    const result = [];
    let amount = target;
    while (amount > 0) {
      const coin = coinUsed[amount];
      result.push(coin);
      amount -= coin;
    }

    // Step 7: Return the result array
    return result.sort((a, b) => a - b);
  }
}
