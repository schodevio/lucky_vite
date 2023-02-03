class Home::WelcomePage < MainLayout
  include Lucky::HTMLPage

  def content
    h1 "Hello Lucky!"

    js_link asset("js/packs/hello.ts"), defer: "true"
  end
end
