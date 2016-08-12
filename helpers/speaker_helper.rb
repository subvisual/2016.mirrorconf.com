module SpeakerHelper
  def speaker_id(name)
    I18n.transliterate name.downcase.gsub(' ', '-')
  end

  def speaker_social_links(speaker)
    return [] unless speaker.links

    speaker.links.map do |name, link|
      link_to image_tag("icons/#{name}.svg"), link
    end
  end

  def link_to_speaker(name, **args)
    link_to name, "/speakers##{speaker_id(name)}", args
  end
end
