Rails.application.routes.draw do
# 1. add namespacing so its clear we're fetching to api and version 1
# 2. set up nested routes for projects
      # ex:  api/v1/projects/1/issues
      # prevented : api/v1/issues -- aka see allll issues for every proj in the db

  namespace :api do  # added in api before every route
    namespace :v1 do 
      # resources :issues  ---- # adding this back in would allow us to access api/v1/issues again
      resources :projects do
        resources :issues
      end
    end 
  end

end

# Notes: 
# # rails s -p 3001 (the way to change ports)

# the routes we set up in ouir rails app, are the routes we'll be making fetch requests to in our frontend 