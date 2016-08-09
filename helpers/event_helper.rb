module EventHelper
  def event_time(event_start, event_end = nil, mobile_only: false)
    klass = "u-mobile" if mobile_only

    content_tag :div, class: klass do
      content_tag :p, class: "Event-time #{klass}" do
        event_end ? "#{event_start} > #{event_end}" : event_start
      end
    end
  end
end
