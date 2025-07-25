Jekyll::Hooks.register :pages, :post_render do |page|
  if page.ext == '.xml'
    page.output = page.output.gsub(
      /^<\?xml version="1.0" encoding="UTF-8"\?>\n/,
      ''
    )
  end
end
