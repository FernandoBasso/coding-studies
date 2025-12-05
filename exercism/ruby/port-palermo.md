# Port Palermo

* [Port Palermo Exercism Ruby learning exercise](https://exercism.org/tracks/ruby/exercises/port-palermo)

## Solution

```ruby
module Port
  IDENTIFIER = :PALE

  def self.get_identifier(city)
    city[0..3].upcase.to_sym
  end

  def self.get_terminal(ship_identifier)
    # ①
    ship_identifier.to_s.match(/^(OIL|GAS)/) ? :A : :B
  end
end
```

1. Could be replaced with something like this:

   ```irb
   >> ship = 'GAS123'
   => "GAS123"
   >> %w[OIL GAS].member?(ship[0..2].upcase)
   => true
   ```
