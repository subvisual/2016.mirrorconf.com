module ScheduleTableHelper
  def schedule_table_day(index)
    klass = "mobilePadded" if index.even?
    content_tag :div, class: "ScheduleTable-day #{klass}" do
      yield
    end
  end
end
