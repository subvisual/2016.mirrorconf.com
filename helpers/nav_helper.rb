module NavHelper
  def nav_link(item, current: "none", classes: "")
    classes += " Nav-link"
    classes += " Nav-current" if item.url.include?(current)

    link_to item.url, target: item.target, class: classes do
      [
        item.text,
        (content_tag :span, class: "u-screen-reader-text" do
          item.screen_reader_text.to_s
        end),
      ].join
    end
  end
end
