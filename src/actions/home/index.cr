class Home::Index < BrowserAction
  get "/" do
    html Home::WelcomePage
  end
end
