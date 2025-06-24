import unittest
from wordbreak import word_break


class TestWordBreak(unittest.TestCase):
    def test_word_break_simple_case_1(self):
        self.assertTrue(word_break('ilikedsa', {'i', 'like', 'dsa'}))

    def test_word_break_repeated_word(self):
        self.assertTrue(word_break('applepenapple', {'apple', 'pen'}))

    def test_word_break_not_found(self):
        self.assertFalse(
            word_break('catsandog',
                       {'cats', 'dog', 'sand', 'and', 'cat'}))

    ##
    # This one takes forever unless good optimized dynamic
    # programming is used.
    #
    def test_word_break_expensive_input(self):
        self.assertTrue(
            word_break(
                'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                {'a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa',
                 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'}
            )
        )


if __name__ == '__main__':
    unittest.main()
