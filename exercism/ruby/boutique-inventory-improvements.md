# Boutique Inventory Improvements

* [Boutique Inventory Improvements Exercism Ruby learning exercise](https://exercism.org/tracks/ruby/exercises/boutique-inventory-improvements)

## Solution

```ruby
require 'ostruct'
class BoutiqueInventory
  attr_reader :items

  def initialize(items)
    @items = items.collect { |item| OpenStruct.new(item) }
  end

  def item_names
    items.collect(&:name).sort
  end

  def total_stock
    items.map(&:quantity_by_size).flat_map(&:values).sum
  end
end
```

The body of the method `total_stock` could also be this:

```ruby
items.sum do |item|
  item.quantity_by_size.values.sum
end
```

Or this:

```ruby
items.map(&:quantity_by_size).map(&:values).sum(&:sum)
```
