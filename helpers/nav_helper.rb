module NavHelper
  def nav_link(item, current: "none", classes: "")
    classes += " Nav-link"
    classes += " Nav-current" if item.url.include?(current)

    link_to item.text, item.url, target: item.target, class: classes
  end
end
