def word_break(s: str, words: set[str]) -> bool:
    n = len(s)
    max_len = max(len(word) for word in words) if words else 0

    memo = [False] * (n + 1)
    memo[0] = True

    for i in range(1, n + 1):
        ini = max(0, i - max_len)
        for j in range(i - 1, ini - 1, -1):
            seg = s[j:i]
            if memo[j] and seg in words:
                memo[i] = True
                break

    return memo[n]
