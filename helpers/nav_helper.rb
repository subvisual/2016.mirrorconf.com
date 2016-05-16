module NavHelper
  def nav_link(text, url, current: "none", classes: "")
    classes += " Nav-link"
    classes += " Nav-current" if url.include?(current)

    link_to text, url, class: classes
  end
end
