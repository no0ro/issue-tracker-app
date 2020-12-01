Rails.application.routes.draw do

# add namespacing so its clear we're fetching to api and version 1
  namespace :api do  # add in api before every route
    namespace :v1 do
      resources :issues
      resources :projects
    end 
  end
end


# fetch('http://localhost:3000/api/v1/issues')
# rails s -p 4000 (the way to change ports)

# the routes we set up in ouir rails app, are the routes we'll be making fetch
# requests to in our frontend 