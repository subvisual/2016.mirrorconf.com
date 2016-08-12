module EventHelper
  def event_time(event_start, event_end = nil, mobile_only: false)
    klass = "u-mobile" if mobile_only

    content_tag :div, class: klass do
      content_tag :p, class: "Event-time Text base blue alternative" do
        event_end ? "#{event_start} > #{event_end}" : event_start
      end
    end
  end

  def link_to_event(text, name, **args)
    link_to text, "/schedule##{speaker_id(name)}", args
  end
end
