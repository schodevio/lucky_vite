class Shared::LayoutHead < BaseComponent
  needs page_title : String

  def render
    head do
      utf8_charset
      title "My App - #{@page_title}"

      csrf_meta_tags
      responsive_meta_tag

      css_link asset("css/application.scss")
      js_link asset("js/packs/application.ts"), defer: "true"

      # Used only in development when running `lucky watch`.
      # Will reload browser whenever files change.
      # See [docs]()
      live_reload_connect_tag
    end
  end
end
