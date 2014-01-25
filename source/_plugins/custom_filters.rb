#custom filters for brianchu.com

module CustomLiquidFilters

  # Used to strip out liquid tags
  def strip_liquid(input)
    input.gsub(/\{%\s.*?\s%\}/, '')
  end

  def strip_div(input)
    input.gsub(/<div.*?<\/div>/, '')
  end

end
Liquid::Template.register_filter CustomLiquidFilters
