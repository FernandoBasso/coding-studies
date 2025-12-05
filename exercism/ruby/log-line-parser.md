# Log Line Parser

* [Log Line Parser Exercism Ruby learning exercise](https://exercism.org/tracks/ruby/exercises/log-line-parser)

## Solution 1

```ruby
class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
    ##
    # The first `gsub` replaces tabs and newlines with a single
    # space.
    #
    # The second `gsub` matches an initial literal ‘[’ followed by
    # character that is NOT a closing (literal) `]` one or more
    # times. Then matches the char sequence ‘]: ’ (not the space)
    # and replaces the entire match nothing, effectively “deleting”
    # whatever was matched.
    #
    @line.gsub(/(\t|\r\n?)/, ' ').gsub(/^\[[^\]]+\]:\s+/, '').strip
  end

  def log_level
    @line.match(/\[([^\]]+)\]/)[1].downcase
  end

  def reformat
    "#{message} (#{log_level})"
  end
end
```

## Solution 2

```ruby
class LogLineParser
  attr_reader :log_level, :message

  def initialize(line)
    ##
    # The first named capturing group matches the log level without
    # its surrounding ‘[’ and ‘]’ characters.
    #
    # The second named capturing group matches the log message, which
    # is everything after the ‘:<spaces>’.
    #
    m = /\[(?<level>[^\]]+)\]:\s*(?<text>.*)/.match(line)

    #
    # Strip takes care of spaces, tabs and newlines at both ends
    # of the string.
    #

    @log_level = m[:level].strip.downcase
    @message = m[:text].strip
  end

  def reformat
    "#{message} (#{log_level})"
  end
end
```
