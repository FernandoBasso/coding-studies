def word_break_rec(s, i, words):
    if i == len(s):
        return 1

    n = len(s)
    prefix = ''

    for j in range(i, n):
        prefix += s[j]

        if prefix in words and word_break_rec(s, j + 1, words) == 1:
            return 1

    return 0


def word_break(s, words):
    return word_break_rec(s, 0, words)


if __name__ == '__main__':
    words = {'i', 'like', 'dsa'}
    print(word_break('dsadsa', words))
    # print(word_break('idsalike', words))
    # s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
    # words = {'a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'},
    # print(word_break(s, words))

# print(word_break('idsa', words))
#
# print(word_break('dsai', words))
#
# print(word_break('dsalike', words))
